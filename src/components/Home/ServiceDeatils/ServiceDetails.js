import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const { _id, iconImage, title, description } = service;

  return (
    <Col
      md={{ span: 3, offset: 1 }}
      style={{ backgroundColor: "white", padding: "20px" }}
      className="my-5"
    >
      <Link to={`/order/${_id}`} className="nav-link text-dark">
        <Image
          src={`data:image/png;base64,${iconImage.img}`}
          className="img-fluid"
          style={{ height: "100px", width: "100px", margin: "auto" }}
        />
        <h4 className="mt-3">{title}</h4>
        <p>{description}</p>
      </Link>
    </Col>
  );
};

export default ServiceDetails;
