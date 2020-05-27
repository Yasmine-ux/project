import React from "react";
import { Card, Button } from "react-bootstrap";
import "../SerCards/style.css";

export default function SerCard(props) {
  return (
    <div className="card-div">
      <div className="SerCard">
        <Card
          border="warning"
          style={{ width: "18rem" }}
          className="service-Card"
        >
          <Card.Img
            className="Card-img"
            variant="top"
            src="https://www.amonservice.com/wp-content/uploads/2017/08/avatar.png"
            height="250px"
          />
          <Card.Body>
            <Card.Title>{props.service.title}</Card.Title>
            <Card.Text>{props.service.description}</Card.Text>
            <Card.Text>{props.service.providername}</Card.Text>
            <Button variant="outline-warning" className="service-card-btn">
              Edit
            </Button>
            <Button variant="outline-warning" className="service-card-btn">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
