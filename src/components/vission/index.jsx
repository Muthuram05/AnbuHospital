import React from "react";

import "./style.css";
const Vision = () => {
  return (
    <div class="vision-container">
      <div>
        <img src="./images/our_vision.png" alt="" class="img-fluid" />
      </div>
      <div>
        <h1>Our Vision</h1>
        <br />
        <p>
          At Anbu Hospital, we aim to provide world-class healthcare services
          through healing, hope and kindness to every life we touch.
        </p>
        <br />
        <p>
          Our team of expert doctors, nurses, and other allied healthcare
          professionals work diligently to improve the health and well-being of
          our patients.
        </p>
        <br />
        <p>
          We are believe in offering holistic patient-oriented care to our
          diverse and vibrant community of patients.
        </p>
        <br />
        <a href="/" class="hero-btn red-btn" alt="vision logo">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Vision;
