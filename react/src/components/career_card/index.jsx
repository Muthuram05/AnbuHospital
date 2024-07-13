import React from "react";
import "./style.css"
const CareerCard = () => {
  return (
    <div className="career-card">
      <img
        src="https://i.pinimg.com/736x/06/2b/83/062b83d4e3e10d2968fbf72b14cd24a7.jpg"
        alt=""
        width={"100px"}
        height={"120px"}
      />
      <h3>Bias to Action</h3>
      <p>
        Experiment, fail, learn, share, repeat. Seek forgiveness instead of
        permission.
      </p>
    </div>
  );
};

export default CareerCard;
