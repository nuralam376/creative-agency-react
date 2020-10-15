import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceDetails from "../ServiceDeatils/ServiceDetails";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://creative-agency1.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => {
        alert("Something went wrong");
        window.location.reload(); // restarts the heroku server if idle
      });
  }, []);

  return (
    <Container className="services my-5">
      <h2 className="text-center">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>{" "}
      </h2>

      <Row className="mt-5 mx-auto text-center">
        {services.map((service) => (
          <ServiceDetails key={service._id} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
