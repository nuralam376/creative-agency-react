import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ClientServiceData from "../ClientServiceData/ClientServiceData";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { servicesData } from "../Home/Services/Services";

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
