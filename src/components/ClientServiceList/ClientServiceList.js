import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import ClientServiceData from "../ClientServiceData/ClientServiceData";

const ClientServiceList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allorders", {
      method: "POST",
      body: JSON.stringify({ email: loggedInUser.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setServicesData(data))
      .catch(() => alert("Something went wrong"));
  }, [loggedInUser]);

  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10} className="responsive-dashboard">
          <DashboardHeader title="All Orders" />

          <Row>
            {servicesData.map((service) => (
              <ClientServiceData key={service._id} service={service} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ClientServiceList;
