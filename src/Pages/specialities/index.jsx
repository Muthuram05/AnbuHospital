import React, { useState } from "react";
import FullScreenImage from "../../components/full_screen_image";
import {Details}  from "./constant.js"; 

import "./style.css";

const Specialities = () => {
  const [currentSpecialityIndex, setCurrentSpecialityIndex] = useState(0);

  const moveLeft = () => {
    setCurrentSpecialityIndex((prevIndex) =>
      prevIndex === 0 ? Details.length - 1 : prevIndex - 1
    );
  };

  const moveRight = () => {
    setCurrentSpecialityIndex((prevIndex) =>
      prevIndex === Details.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSpeciality = Details[currentSpecialityIndex];

  return (
    <div>
      <FullScreenImage
        name={"Specialities"}
        content={
          "Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses."
        }
      />
      <br />
      <div className="specialities-container">
        <div>
          <div>WHAT THEY</div>
          <div>SAY ABOUT US</div>
          <div>{currentSpeciality.name} - {currentSpeciality.Deg}</div>
        </div>
          <img src={currentSpeciality.img} alt={currentSpeciality.specialities} />
      </div>
      <div className="controler">
        <button onClick={moveLeft}><img alt="left" src="./images/left.png"/></button>
        <button onClick={moveRight}><img alt="left" src="./images/right.png"/></button>
      </div>
    </div>
  );
};

export default Specialities;
