import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ClientServiceData from "../ClientServiceData/ClientServiceData";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import services1 from "../../images/icons/service1.png";
import services2 from "../../images/icons/service2.png";
import services3 from "../../images/icons/service3.png";

export const servicesData = [
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

const ClientServiceList = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10} className="responsive-dashboard">
          <DashboardHeader title="Make Admin" />

          <Row>
            {servicesData.map((service) => (
              <ClientServiceData key={service.id} service={service} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ClientServiceList;
