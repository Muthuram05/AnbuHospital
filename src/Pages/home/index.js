import React from "react";

import AboutUs from "../../components/aboutUs";
import Mission from "../../components/mission";
import FullScreenImage from "../../components/full_screen_image";

export const Home = () => {
  return (
    <div>
      <FullScreenImage name={"Aboutus"} content={"Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses."}/>
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
