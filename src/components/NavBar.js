import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="/images/logo.png" alt="log"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/specialities"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Specialities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/event"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Event
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/careers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
