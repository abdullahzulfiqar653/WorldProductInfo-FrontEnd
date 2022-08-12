import Cart from "../Cart/Cart";
import React, { Component } from "react";
import Logo from "../../../assets/images/logo.png";

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
            <a href="#" className="logo ml-lg-0">
              <img src={Logo} alt="logo" width="144" height="45" />
            </a>
            <form
              method="get"
              action="#"
              className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
            >
              <div className="select-box">
                <select name="category" id="category">
                  <option value="0">All Categories</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                  <option value="4">Category 4</option>
                  <option value="5">Category 5</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search in..."
                required
              />
              <button className="btn btn-search" type="submit">
                <i className="w-icon-search"></i>
              </button>
            </form>
          </div>
          <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <a href="" className="w-icon-call"></a>
              <div className="call-info d-lg-show">
                <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                  <a href="mailto:#" className="text-capitalize">
                    Live Chat
                  </a>
                  or :
                </h4>
                <a
                  href="tel:#"
                  className="phone-number font-weight-bolder ls-50"
                >
                  0(000)000-000
                </a>
              </div>
            </div>
            <a className="wishlist label-down link d-xs-show" href="#">
              <i className="w-icon-heart"></i>
              <span className="wishlist-label d-lg-show">Wishlist</span>
            </a>
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
