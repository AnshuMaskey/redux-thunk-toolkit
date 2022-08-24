import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import ReadData from "./ReadData";
import EditData from "./EditData";
import { editData, deleteData, updateData } from "../redux/actionCreator";
import { Form } from "react-bootstrap";

const DataTable = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);

  const handleEdit = (e, id) => {
    e.preventDefault();
    dispatch(editData(id));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteData(id));
  };

  const handleSave = (e, id) => {
    e.preventDefault();
    dispatch(updateData(id));
    dispatch(editData(null));
  };

  const handleCancel = () => {
    dispatch(editData(null));
  };
  return (
    <div>
      <Form>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Birthdate</th>
              <th>Address</th>
              <th>Phone No.</th>
              <th>Password</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((row, index) => {
                return (
                  <Fragment>
                    {id === row.id ? (
                      <EditData
                        row={row}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                      />
                    ) : (
                      <ReadData
                        row={row}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Fragment>
                );
              })}
          </tbody>
        </Table>
      </Form>
    </div>
  );
};

export default DataTable;