import React from "react";

import AboutUs from "../../components/aboutUs";
import Mission from "../../components/mission";
import FullScreenImage from "../../components/full_screen_image";
import Vision from "../../components/vission";

export const Home = () => {
  return (
    <div>
      <FullScreenImage name={"Aboutus"} content={"Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses."}/>
      <br />
      <AboutUs />
      <br />
      <Mission />
      <br />
      <Vision />
      
    </div>
  );
};
