import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const ServicesList = () => {
  return (
    <Row>
      <Col md={2} sm={2} xs={2}>
        <Sidebar />
      </Col>
      <Col md={10} sm={10} xs={10}>
        <DashboardHeader title="Services List" />
        <Table size="md" responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Project Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abc</td>
              <td>abc@gmail.com</td>
              <td>Web Development</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quia rem unde labore excepturi sequi numquam
                distinctio ipsam et fugiat.
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Abc</td>
              <td>abc@gmail.com</td>
              <td>Web Development</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quia rem unde labore excepturi sequi numquam
                distinctio ipsam et fugiat.
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Abc</td>
              <td>abc@gmail.com</td>
              <td>Web Development</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quia rem unde labore excepturi sequi numquam
                distinctio ipsam et fugiat.
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Abc</td>
              <td>abc@gmail.com</td>
              <td>Web Development</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quia rem unde labore excepturi sequi numquam
                distinctio ipsam et fugiat.
              </td>
              <td>Pending</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ServicesList;
