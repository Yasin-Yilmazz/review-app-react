import React from "react";

const Review = ({ id, name, job, image, text }) => {
  return (
    <div className="review">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <h4>{name} </h4>
      <h3>{job} </h3>
      <p className="info">{text} </p>
    </div>
  );
};

export default Review;
