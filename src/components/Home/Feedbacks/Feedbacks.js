import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ClientFeedback from "../ClientFeedback/ClientFeedback";

const Feedbacks = () => {
  const [clientsFeedbacks, setClientsFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://creative-agency1.herokuapp.com/allreviews")
      .then((res) => res.json())
      .then((data) => setClientsFeedbacks(data))
      .catch(() => alert("Something went wrong"));
  }, []);

  return (
    <div className="feedbacks my-5">
      <h2 className="text-center">
        Clients <span style={{ color: "#7AB259" }}>Feedback</span>
      </h2>
      <Container>
        <Row>
          {clientsFeedbacks.map((clientFeedback) => (
            <ClientFeedback
              key={clientFeedback._id}
              clientFeedback={clientFeedback}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Feedbacks;
