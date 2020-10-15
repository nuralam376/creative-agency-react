import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ServiceListDetail = ({ service }) => {
  const { _id, name, email, service: serviceName, detail, status } = service;
  const history = useHistory();

  const changeStatus = (state) => {
    fetch("http://localhost:5000/changeorderstatus", {
      method: "PATCH",
      body: JSON.stringify({ id: _id, status: state }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then(() => {
        alert("Order changed successfully");
        history.push("/servicelist");
      })
      .catch(() => alert("Somwthing went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{detail}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {status.toUpperCase()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {status !== "pending" && (
              <Dropdown.Item onClick={() => changeStatus("pendong")}>
                Pending
              </Dropdown.Item>
            )}
            {status !== "ongoing" && (
              <Dropdown.Item onClick={() => changeStatus("ongoing")}>
                Ongoing
              </Dropdown.Item>
            )}
            {status !== "done" && (
              <Dropdown.Item onClick={() => changeStatus("done")}>
                Done
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default ServiceListDetail;
