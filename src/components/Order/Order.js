import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const Order = () => {
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
            <input
              name="name"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Your name / company’s name"
            />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>This field is required</span>}
            <br />
            <input
              name="email"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Your email address"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>This field is required</span>}
            <br />
            <input
              name="service"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Graphic Design"
            />
            {/* errors will return when field validation fails  */}
            {errors.service && <span>This field is required</span>}
            <br />
            <textarea
              name="detail"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Project Details"
            />
            {/* errors will return when field validation fails  */}
            {errors.detail && <span>This field is required</span>}
            <br />
            <textarea
              name="price"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Price"
            />
            {/* errors will return when field validation fails  */}
            {errors.price && <span>This field is required</span>}
            <br />
            <input
              type="file"
              name="detail"
              ref={register({ required: true })}
              className="w-25"
              placeholder="Project Details"
            />
            {/* errors will return when field validation fails  */}
            {errors.file && <span>This field is required</span>}
            <br />
            <br />
            <input
              type="submit"
              className="btn btn-dark d-block"
              value="Send"
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
