import React from "react";
import { Col, Image } from "react-bootstrap";

const ServiceDetails = ({ service }) => {
  const { icon, name, description } = service;
  return (
    <Col md={4}>
      <Image src={icon} classname="w-25 img-fluid" />
      <h4>{name}</h4>
      <p>{description}</p>
    </Col>
  );
};

export default ServiceDetails;
