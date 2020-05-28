import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./CardStyle.css";
// import { connect } from "react-redux";
// import {getCategories} from './Redux/Actions/categories_action'

function ServiceCard(props) {
  return (
    <div className="cards">
      {props.card.map((el) => (
        <Card className="text-white cards" style={{ width: "450px" }}>
          <Card.Img src={el.src} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="title">{el.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
}

export default ServiceCard;
