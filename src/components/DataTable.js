import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import ReadData from "./ReadData";
import EditData from "./EditData";
// import { dataReplace, editData, updateData } from "../redux/actionCreator";

const DataTable = () => {
  const { users, id } = useSelector((state) => state.users);
  // const dispatch = useDispatch();

  // const handleEdit = (e, id) => {
  //   e.preventDefault();
  //   console.log(id, "handleedit");
  //   dispatch(editData(id));
  // };

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   dispatch(deleteData(id));
  // };

  return (
    <div key={id}>
      {users.length > 0 && (
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
                        // handleSave={handleSave}
                        // handleCancel={handleCancel}
                      />
                    ) : (
                      <ReadData
                        row={row}
                        // handleEdit={handleEdit}
                        // handleDelete={handleDelete}
                      />
                    )}
                  </Fragment>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default DataTable;
