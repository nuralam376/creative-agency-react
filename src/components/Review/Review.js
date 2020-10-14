import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const Review = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10}>
          <DashboardHeader title="Review" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Your name"
            />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>This field is required</span>}
            <br />

            <input
              name="designation"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Company’s name, Designation"
            />
            {/* errors will return when field validation fails  */}
            {errors.designation && <span>This field is required</span>}
            <br />
            <textarea
              name="description"
              ref={register({ required: true })}
              className="form-control w-50"
              placeholder="Project Details"
            />
            {/* errors will return when field validation fails  */}
            {errors.description && <span>This field is required</span>}
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
            <input type="submit" className="btn btn-dark d-block" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
