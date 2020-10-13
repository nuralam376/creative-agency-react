import React from "react";
import { Container, Row } from "react-bootstrap";
import Customer1 from "../../../images/customer-1.png";
import Customer2 from "../../../images/customer-2.png";
import Customer3 from "../../../images/customer-3.png";
import ClientFeedback from "../ClientFeedback/ClientFeedback";

const clientsFeedbacks = [
  {
    id: 1,
    name: "Nash Patrik",
    designation: "CEO, Manpol",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    image: Customer1,
  },
  {
    id: 2,
    name: "Miriam Barron",
    designation: "CEO, Manpol",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    image: Customer2,
  },
  {
    id: 3,
    name: "Bria Malone",
    designation: "CEO, Manpol",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    image: Customer3,
  },
];

const Feedbacks = () => {
  return (
    <div className="feedbacks my-5">
      <h2 className="text-center">
        Clients <span style={{ color: "#7AB259" }}>Feedback</span>
      </h2>
      <Container>
        <Row>
          {clientsFeedbacks.map((clientFeedback) => (
            <ClientFeedback
              key={clientFeedback.id}
              clientFeedback={clientFeedback}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Feedbacks;
