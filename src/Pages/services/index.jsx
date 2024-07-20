import React from "react";
import FullScreenImage from "../../components/full_screen_image";
import { ServiceDetails } from "./constant";

import "./style.css";

const Services = () => {
  const [service, setService] = React.useState({
    id: 1,
    name: "Laproscopic Surgeries",
    content: "Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses.",
    img: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
});
  return (
    <div>
      <FullScreenImage
        name={"Services"}
        content={
          "Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses."
        }
      />
      <div className="service-bottom-container">
        <div className="service-card-map">
          {ServiceDetails.map((e) => (
            <div onClick={() => setService(e)}>
              <Card name={e.name} content={e.content} isActive={e.id === service.id}/>
            </div>
          ))}
        </div>
        <div>
          {service && (
            <div className="service-details">
              <h1 className="name">{service.name}</h1>
              <div className="content">{service.content}</div>
              <img src={service.img} alt={service.name} />
              <br></br>
              <img src={service.img} alt={service.name} />
              <div className="content">{service.content}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;

function Card({ name, isActive }) {
  return (
    <div className={`${"serviceCard"} ${isActive && "isActive"}`}> 
      <div className="name">{name}</div>
    </div>
  );
}
