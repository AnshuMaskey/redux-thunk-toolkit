import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  dataReplace,
  deleteData,
  editData,
  userFirst,
} from "../redux/userSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./User.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ReadData = ({ row }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleYes = (id) => {
    dispatch(deleteData(id));

    setShow(false);
    dispatch(userFirst());
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    console.log(id, "edit");
    dispatch(editData(id));
    dispatch(dataReplace(row));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <>
      <tr>
        <td onClick={() => dispatch(dataReplace(row))}>{row.name}</td>
        <td> {row.email}</td>
        <td>{row.date}</td>
        <td>{row.address}</td>
        <td>{row.phone}</td>
        <td> {row.password}</td>
        <td>
          <IconButton
            className="table_icon"
            onClick={(e) => handleEdit(e, row.id)}
          >
            <AiFillEdit color="#fff" />
          </IconButton>
          <IconButton className="table_icon" onClick={(e) => handleDelete(e)}>
            <AiFillDelete color="#fff" />
          </IconButton>
        </td>
      </tr>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the user, {row.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleYes(row.id)}>
            Yes
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReadData;
