import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import ServiceListDetail from "../ServiceListDetail/ServiceListDetail";

const ServicesList = () => {
  const [orderServices, setOrderServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allorders", {
      method: "POST",
      body: JSON.stringify({ email: "" }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderServices(data))
      .catch(() => alert("Something went wrong"));
  }, []);

  return (
    <Row>
      <Col md={2} sm={2} xs={2}>
        <Sidebar />
      </Col>
      <Col md={10} sm={10} xs={10}>
        <DashboardHeader title="Services List" />
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Project Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderServices.map((service) => (
              <ServiceListDetail key={service._id} service={service} />
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ServicesList;
