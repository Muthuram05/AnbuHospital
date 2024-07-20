import React from "react";

import "./style.css";
import FullScreenImage from "../../components/full_screen_image";

export const Contact = () => {
  return (
    <>
     <FullScreenImage name={"Contact Us"} content={"Hospital marketers juggle diverse audiences: consumers, internal and external physicians, staff and executives. You also manage multiple projects, deadlines and demands. You need content creators who understand these unique audiences and stresses."}/>
      <div class="contact">
        <div class="heading text-center">
          <h2>
            Contact
            <span> Us </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="contact-container">
          <div class="left">
            <div class="title">
              <h3>Contact detail</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div class="content">
              <div class="info">
                <i class="fas fa-mobile-alt"></i>
                <h4 class="d-inline-block">
                  PHONE :
                  <br />
                  <span>+12457836913 , +12457836913</span>
                </h4>
              </div>
              <div class="info">
                <i class="far fa-envelope"></i>
                <h4 class="d-inline-block">
                  EMAIL :
                  <br />
                  <span>example@info.com</span>
                </h4>
              </div>
              <div class="info">
                <i class="fas fa-map-marker-alt"></i>
                <h4 class="d-inline-block">
                  ADDRESS :<br />
                  <span>6743 last street , Abcd, Xyz</span>
                </h4>
              </div>
            </div>
          </div>
          <form className="right">
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" class="form-control" placeholder="Name" />
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Message"
                ></textarea>
              </div>
              <button class="btn btn-block" type="submit">
                Send Now!
              </button>
          </form>
        </div>
      </div>
    </>
   
  );
};
