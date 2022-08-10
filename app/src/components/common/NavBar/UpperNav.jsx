import React, { Component } from "react";
import ENGFlag from "../../../assets/images/flags/eng.png";
import FRAFlag from "../../../assets/images/flags/fra.png";

class UpperNav extends Component {
  render() {
    return (
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <div className="welcome-msg">Welcome To GFK Etilize</div>
          </div>
          <div className="header-right">
            <div className="dropdown">
              <a href="#">USD</a>
              <div className="dropdown-box">
                <a href="#">USD</a>
                <a href="#">EUR</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#">
                <img
                  src={ENGFlag}
                  alt="ENG Flag"
                  width={14}
                  height={8}
                  className="dropdown-image"
                />
                ENG
              </a>
              <div className="dropdown-box">
                <a href="#">
                  <img
                    src={ENGFlag}
                    alt="ENG Flag"
                    width={14}
                    height={8}
                    className="dropdown-image"
                  />
                  ENG
                </a>
                <a href="#">
                  <img
                    src={FRAFlag}
                    alt="FRA Flag"
                    width={14}
                    height={8}
                    className="dropdown-image"
                  />
                  FRA
                </a>
              </div>
            </div>

            <span className="divider d-lg-show"></span>
            <a href="#" className="d-lg-show">
              Blog
            </a>
            <a href="#" className="d-lg-show">
              Contact Us
            </a>
            <a href="#" className="d-lg-show">
              My Account
            </a>
            <a href="#" className="d-lg-show login sign-in">
              <i className="w-icon-account"></i>Sign In
            </a>
            <span className="delimiter d-lg-show">/</span>
            <a href="#" className="ml-0 d-lg-show login register">
              Register
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UpperNav;
