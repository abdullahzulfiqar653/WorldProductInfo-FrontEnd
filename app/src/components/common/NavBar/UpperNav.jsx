import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ENGFlag from '../../../assets/images/flags/eng.png';
import FRAFlag from '../../../assets/images/flags/fra.png';

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
              <Link>USD</Link>
              <div className="dropdown-box">
                <Link>USD</Link>
                <Link>EUR</Link>
              </div>
            </div>
            <div className="dropdown">
              <Link>
                <img src={ENGFlag} alt="ENG Flag" width={14} height={8} className="dropdown-image" />
                ENG
              </Link>
              <div className="dropdown-box">
                <Link>
                  <img src={ENGFlag} alt="ENG Flag" width={14} height={8} className="dropdown-image" />
                  ENG
                </Link>
                <Link>
                  <img src={FRAFlag} alt="FRA Flag" width={14} height={8} className="dropdown-image" />
                  FRA
                </Link>
              </div>
            </div>

            <span className="divider d-lg-show"></span>

            <Link className="d-lg-show login sign-in">
              <i className="w-icon-account"></i>Sign In
            </Link>
            <span className="delimiter d-lg-show">/</span>
            <Link className="ml-0 d-lg-show login register">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UpperNav;
