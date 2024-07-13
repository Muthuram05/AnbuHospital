import React from "react";
import CareerCard from "../../components/career_card";

import "./style.css";

const Careers = () => {
  return (
    <div>
      <div className="careers-intro">
        <h1 className="intro-header">We’re Redefining Work</h1>
        <p className="margin">
          We’re changing how work gets done — both in our office and around the
          world
        </p>
        <div className="careers-btn">
          <button className="red-fill-button">Find your calling</button>
          <button className="red-btn">Life at Anbu Hospital</button>
        </div>
      </div>
      <div className="careers-goals">
        <h1>What We Believe</h1>
        <p>These are the values we rely on to create a new way to work.</p>
        <div className="career-map">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
      <div>
        <h1>What’s Happening?</h1>
        <p>
          Here are just a few ways we stand out from the crowd and push for
          something better.
        </p>
        <div>
          <img
            src="https://i.pinimg.com/736x/06/2b/83/062b83d4e3e10d2968fbf72b14cd24a7.jpg"
            alt="/"
          />
          <h3>G2G - Good to Great</h3>
          <p>
            Every week, we shut down our systems and spend time talking with
            each other and learning how to be a better employee, leader, and
            person.
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/06/2b/83/062b83d4e3e10d2968fbf72b14cd24a7.jpg"
            alt="/"
          />
          <h3>G2G - Good to Great</h3>
          <p>
            Every week, we shut down our systems and spend time talking with
            each other and learning how to be a better employee, leader, and
            person.
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/06/2b/83/062b83d4e3e10d2968fbf72b14cd24a7.jpg"
            alt="/"
          />
          <h3>G2G - Good to Great</h3>
          <p>
            Every week, we shut down our systems and spend time talking with
            each other and learning how to be a better employee, leader, and
            person.
          </p>
        </div>
      </div>
      <div>
        <h1>Open Positions</h1>
        <div>
          <h1>Nursing</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Doctors</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Admin</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
