import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, link }) => {
  return (
    <div>
      <div className="Cards">
        <div className="Cards-container">
          <h5>{title}</h5>
        </div>
        <div className="card-head">
          <h6>
            <Link to={link}>Get Notes</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Cards;
