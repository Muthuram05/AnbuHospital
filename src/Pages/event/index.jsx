import React from "react";
import FullScreenImage from "../../components/full_screen_image";

const Event = () => {
  return (
    <div>
      <FullScreenImage
        name={"Event"}
        content={
          "Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses."
        }
      />
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
        <img src="./images/noevent.png" alt="no event" />
        <h1>No Event Till Now</h1>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Event;
