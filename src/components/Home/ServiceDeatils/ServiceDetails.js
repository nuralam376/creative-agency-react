import React from "react";
import { Col, Image } from "react-bootstrap";

const ServiceDetails = ({ service }) => {
  const { iconImage, name, description } = service;

  return (
    <Col
      md={{ span: 3, offset: 1 }}
      style={{ backgroundColor: "white", padding: "20px" }}
      className="my-5"
    >
      <Image
        src={`data:image/png;base64,${iconImage.img}`}
        className="img-fluid"
        style={{ height: "100px", width: "100px", margin: "auto" }}
      />
      <h4 className="mt-3">{name}</h4>
      <p>{description}</p>
    </Col>
  );
};

export default ServiceDetails;
