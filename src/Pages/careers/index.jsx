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
        <br />
        <div className="career-map">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
      <br />
      <div className="our-trend">
        <h1>What’s Happening?</h1>
        <p>
          Here are just a few ways we stand out from the crowd and push for
          something better.
        </p>
        <br />
        <div className="our-trend-demo">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Mzc6hAKafr8?si=o3GzXef_VPlt1W2M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h3>G2G - Good to Great</h3>
            <p>
              Every week, we shut down our systems and spend time talking with
              each other and learning how to be a better employee, leader, and
              person.
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Mzc6hAKafr8?si=o3GzXef_VPlt1W2M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h3>G2G - Good to Great</h3>
            <p>
              Every week, we shut down our systems and spend time talking with
              each other and learning how to be a better employee, leader, and
              person.
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Mzc6hAKafr8?si=o3GzXef_VPlt1W2M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h3>G2G - Good to Great</h3>
            <p>
              Every week, we shut down our systems and spend time talking with
              each other and learning how to be a better employee, leader, and
              person.
            </p>
          </div>
        </div>
      </div>
      <br />
      <h1>Open Positions</h1>
      <div className="opening-position">
        <div className="position-open">
          <h1>Nursing</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Explore More</button>
        </div>
        <div className="position-open">
          <h1>Doctors</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>Explore More</button>
        </div>
        <div className="position-open">
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
