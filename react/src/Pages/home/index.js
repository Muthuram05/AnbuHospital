import React from "react";

import AboutUs from "../../components/aboutUs";
import Mission from "../../components/mission";

export const Home = () => {
  return (
    <div>
      <AboutUs />
      <Mission />
      <div class="vision content">
        <h1>Our Vision</h1>
        <p>
          At Anbu Hospital, we aim to provide world-class healthcare services
          through healing, hope and kindness to every life we touch.
        </p>
        <p>
          Our team of expert doctors, nurses, and other allied healthcare
          professionals work diligently to improve the health and well-being of
          our patients.
        </p>
        <p>
          We are believe in offering holistic patient-oriented care to our
          diverse and vibrant community of patients.
        </p>
        <a href="/" class="hero-btn red-btn" alt="vision logo">
          Read more
        </a>
        <img src="./images/our_vision.png" alt="" class="img-fluid" />
      </div>
    </div>
  );
};
