import React from "react";
import "./Card.css";



const Card = ({ image, title, description, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <div className="image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
