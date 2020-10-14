import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10}>
          <DashboardHeader title="Make Admin" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              ref={register({ required: true })}
              placeholder="jon@gmail.com"
              className="form-control w-25 d-inline"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>This field is required</span>}
            <input type="submit" className="btn btn-success d-inline" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default MakeAdmin;
