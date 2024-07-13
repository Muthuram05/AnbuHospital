import React from "react";

import "./styles.css";

const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div class="about-container">
          <div class="about-left-container">
            <img src="/images/Aboutus.png" alt="" class="img-fluid" />
          </div>
          <div class="about-right-container">
            <h1>About Us</h1>
            <p>
              The word <b>Anbu</b> is an Indian word that refers to kindness or
              endearing. Therefore, in our pursuit to deliver top-notch
              healthcare services with compassion, our founder, Dr. xxx,
              established Anbu Hospital Private Limited on dd/mm/yyyy in
              Chennai, Tamil Nadu.
            </p>
            <p>
              The tertiary care hospital renders services to several urban and
              semi-urban populations of the city and has an infrastructural
              capacity of 30 beds with 24x7 access to pharmacy, ambulance,
              radiology, and laboratory services. Driven by its motto to serve
              the people with quality health care services, Anbu Hospital is
              known for providing comprehensive patient-centred care with over
              18 clinical specialties available on its premises. Since its
              inception, we have taken pride in providing state-of the-art
              amenities with cutting-edge technology that aims to heal and bring
              hope to our patients.
            </p>
            <a href="/" class="hero-btn red-btn">
              Read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
