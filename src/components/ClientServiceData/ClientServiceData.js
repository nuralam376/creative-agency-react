import React from "react";
import { Alert, Col, Image, Row } from "react-bootstrap";

const ClientServiceData = ({ service }) => {
  const { icon, name, description } = service;

  return (
    <Col
      md={4}
      style={{ border: "1px solid lightgray", padding: "5px", margin: "5px" }}
    >
      <Row>
        <Col>
          <Image
            src={icon}
            className="img-fluid"
            style={{ height: "100px", width: "100px", margin: "auto" }}
          />
        </Col>
        <Col>
          <Alert variant="danger">Pending</Alert>
        </Col>
      </Row>
      <h4 className="mt-3">{name}</h4>
      <p>{description}</p>
    </Col>
  );
};

export default ClientServiceData;
