import React from "react";
import "../stylesheets/Card.css";

export default function Card(props) {
  const { text } = props;
  return (
    <div className="card">
      <h1>{text}</h1>
    </div>
  );
}
