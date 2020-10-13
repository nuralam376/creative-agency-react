import React from "react";
import { Container, Row } from "react-bootstrap";
import services1 from "../../../images/icons/service1.png";
import services2 from "../../../images/icons/service2.png";
import services3 from "../../../images/icons/service3.png";
import ServiceDetails from "../ServiceDeatils/ServiceDetails";

const servicesData = [
  {
    id: 1,
    icon: services1,
    name: "Web & Mobile design",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
  },
  {
    id: 2,
    icon: services2,
    name: "Graphic design",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    id: 3,
    icon: services3,
    name: "Web development",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const Services = () => {
  return (
    <Container className="services my-5">
      <h3 className="text-center">
        Provide awesome <span style={{ color: "green" }}>services</span>{" "}
      </h3>

      <Row className="mt-5 mx-auto text-center">
        {servicesData.map((service) => (
          <ServiceDetails key={service.id} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
