import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col md={10} sm={10} xs={10}>
          <DashboardHeader title="Add Service" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="d-block">
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              <Col md={6}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="servicetitle">Service Title</label>
                <input
                  name="title"
                  ref={register}
                  className="form-control mb-3"
                />
                {errors.title && <span>This field is required</span>}

                <label htmlFor="servicetitle">Description</label>
                <textarea
                  name="description"
                  ref={register({ required: true })}
                  className="form-control mb-3"
                />
                {/* errors will return when field validation fails  */}
                {errors.description && <span>This field is required</span>}
              </Col>

              <Col md={6}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="servicetitle">Service Title</label>
                <input
                  name="file"
                  defaultValue="test"
                  ref={register}
                  className="form-control mb-3"
                />
                <input type="submit" className="btn btn-success text-right " />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddService;
