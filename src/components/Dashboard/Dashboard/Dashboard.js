import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Order from "../Order/Order";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard container-fluid">
      <Container fluid>
        <Row className="mt-3">
          <Col md={2} sm={12} xs={12}>
            <Sidebar />
          </Col>
          <Col md={10} xs={12} sm={12}>
            <Order />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
