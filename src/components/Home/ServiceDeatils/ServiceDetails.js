import React from "react";
import { Col, Image } from "react-bootstrap";

const ServiceDetails = ({ service }) => {
  const { icon, name, description } = service;

  return (
    <Col md={4} className="card-box">
      <Image
        src={icon}
        classname="img-fluid"
        style={{ height: "100px", width: "100px", margin: "auto" }}
      />
      <h4 className="mt-3">{name}</h4>
      <p>{description}</p>
    </Col>
  );
};

export default ServiceDetails;
