import React, { Component } from "react";
import "./BookTripCard.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const BookTripCard = props => {
  // Default Class to apply to Component

  let [title, image1, image2, link] = [
    props.children[0],
    props.children[1],
    props.children[2],
    props.children[3]
  ];

  return (
    <Card color="pink" size="large">
      {title}
      <div className="container">
        {image1}
        <span>{image2}</span>
      </div>
      <Link to={props.to}>{link}</Link>
    </Card>
  );
};

export default BookTripCard;
