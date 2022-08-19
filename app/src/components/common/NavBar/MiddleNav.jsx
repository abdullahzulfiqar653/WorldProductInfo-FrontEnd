import Cart from "../Cart/Cart";
import React, { Component } from "react";
import Logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

class MiddleNav extends Component {
  render() {
    return (
      <div className="header-middle">
        <div className="container">
          <div className="header-left mr-md-4">
            <a
              href="#"
              className="mobile-menu-toggle  w-icon-hamburger"
              aria-label="menu-toggle"
            ></a>
            <NavLink to={"/home"} className="logo ml-lg-0">
              <img src={Logo} alt="logo" width="144" height="45" />
            </NavLink>
            <form
              method="get"
              action="#"
              className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
            >
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search in..."
                style={{ borderLeft: "2px solid #336699" }}
                required
              />
              <button className="btn btn-search" type="submit">
                <i className="w-icon-search"></i>
              </button>
            </form>
          </div>
          <div className="header-right ml-4">
            <a className="compare label-down link d-xs-show" href="#">
              <i className="w-icon-compare"></i>
              <span className="compare-label d-lg-show">Compare</span>
            </a>
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleNav;
