import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ClientFeedback = ({ clientFeedback }) => {
  const { name, designation, image, message } = clientFeedback;
  return (
    <Col
      md={{ span: 3, offset: 1 }}
      className="my-5"
      style={{
        border: "1px solid #BFBFBF",
        borderRadius: "4px",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <Row>
        <Col>
          <Image src={image} className="w-100 img-circle" />
        </Col>
        <Col className="align-self-center">
          <h5>{name}</h5>
          <h6>{designation}</h6>
        </Col>
      </Row>
      <p className="mt-3">{message}</p>
    </Col>
  );
};

export default ClientFeedback;
