import React, { Component } from "react";
import "../assets/css/demo1.min.css";
class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-top">
          <div class="container">
            <div class="header-left">
              <p class="welcome-msg">
                Welcome to Wolmart Store message or remove it!
              </p>
            </div>
            <div class="header-right">
              <div class="dropdown">
                <a href="#currency">USD</a>
                <div class="dropdown-box">
                  <a href="#USD">USD</a>
                  <a href="#EUR">EUR</a>
                </div>
              </div>

              <div class="dropdown">
                <a href="#language">
                  <img
                    src="assets/images/flags/eng.png"
                    alt="ENG Flag"
                    width="14"
                    height="8"
                    class="dropdown-image"
                  />{" "}
                  ENG
                </a>
                <div class="dropdown-box">
                  <a href="#ENG">
                    <img
                      src="assets/images/flags/eng.png"
                      alt="ENG Flag"
                      width="14"
                      height="8"
                      class="dropdown-image"
                    />
                    ENG
                  </a>
                  <a href="#FRA">
                    <img
                      src="assets/images/flags/fra.png"
                      alt="FRA Flag"
                      width="14"
                      height="8"
                      class="dropdown-image"
                    />
                    FRA
                  </a>
                </div>
              </div>
              <span class="divider d-lg-show"></span>
              <a href="blog.html" class="d-lg-show">
                Blog
              </a>
              <a href="contact-us.html" class="d-lg-show">
                Contact Us
              </a>
              <a href="my-account.html" class="d-lg-show">
                My Account
              </a>
              <a href="assets/ajax/login.html" class="d-lg-show login sign-in">
                <i class="w-icon-account"></i>Sign In
              </a>
              <span class="delimiter d-lg-show">/</span>
              <a
                href="assets/ajax/login.html"
                class="ml-0 d-lg-show login register"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div class="container">
            <div class="header-left mr-md-4">
              <a
                href="#"
                class="mobile-menu-toggle  w-icon-hamburger"
                aria-label="menu-toggle"
              ></a>
              <a href="demo1.html" class="logo ml-lg-0">
                <img
                  src="assets/images/logo.png"
                  alt="logo"
                  width="144"
                  height="45"
                />
              </a>
              <form
                method="get"
                action="#"
                class="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >
                <div class="select-box">
                  <select id="category" name="category">
                    <option value="">All Categories</option>
                    <option value="4">Fashion</option>
                    <option value="5">Furniture</option>
                    <option value="6">Shoes</option>
                    <option value="7">Sports</option>
                    <option value="8">Games</option>
                    <option value="9">Computers</option>
                    <option value="10">Electronics</option>
                    <option value="11">Kitchen</option>
                    <option value="12">Clothing</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  required
                />
                <button class="btn btn-search" type="submit">
                  <i class="w-icon-search"></i>
                </button>
              </form>
            </div>
            <div class="header-right ml-4">
              <div class="header-call d-xs-show d-lg-flex align-items-center">
                <a href="tel:#" class="w-icon-call"></a>
                <div class="call-info d-lg-show">
                  <h4 class="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <a href="mailto:#" class="text-capitalize">
                      Live Chat
                    </a>{" "}
                    or :
                  </h4>
                  <a href="tel:#" class="phone-number font-weight-bolder ls-50">
                    0(800)123-456
                  </a>
                </div>
              </div>
              <a
                class="wishlist label-down link d-xs-show"
                href="wishlist.html"
              >
                <i class="w-icon-heart"></i>
                <span class="wishlist-label d-lg-show">Wishlist</span>
              </a>
              <a class="compare label-down link d-xs-show" href="compare.html">
                <i class="w-icon-compare"></i>
                <span class="compare-label d-lg-show">Compare</span>
              </a>
              <div class="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div class="cart-overlay"></div>
                <a href="#" class="cart-toggle label-down link">
                  <i class="w-icon-cart">
                    <span class="cart-count">2</span>
                  </i>
                  <span class="cart-label">Cart</span>
                </a>
                <div class="dropdown-box">
                  <div class="cart-header">
                    <span>Shopping Cart</span>
                    <a href="#" class="btn-close">
                      Close<i class="w-icon-long-arrow-right"></i>
                    </a>
                  </div>

                  <div class="products">
                    <div class="product product-cart">
                      <div class="product-detail">
                        <a href="product-default.html" class="product-name">
                          Beige knitted elas
                          <br />
                          tic runner shoes
                        </a>
                        <div class="price-box">
                          <span class="product-quantity">1</span>
                          <span class="product-price">$25.68</span>
                        </div>
                      </div>
                      <figure class="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/cart/product-1.jpg"
                            alt="product"
                            height="84"
                            width="94"
                          />
                        </a>
                      </figure>
                      <button
                        class="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>

                    <div class="product product-cart">
                      <div class="product-detail">
                        <a href="product-default.html" class="product-name">
                          Blue utility pina
                          <br />
                          fore denim dress
                        </a>
                        <div class="price-box">
                          <span class="product-quantity">1</span>
                          <span class="product-price">$32.99</span>
                        </div>
                      </div>
                      <figure class="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/cart/product-2.jpg"
                            alt="product"
                            width="84"
                            height="94"
                          />
                        </a>
                      </figure>
                      <button
                        class="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  <div class="cart-total">
                    <label>Subtotal:</label>
                    <span class="price">$58.67</span>
                  </div>

                  <div class="cart-action">
                    <a
                      href="cart.html"
                      class="btn btn-dark btn-outline btn-rounded"
                    >
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      class="btn btn-primary  btn-rounded"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div className="downdrop category-downdrop has-border">
                  <a
                    href="#"
                    class="category-toggle text-dark"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i class="w-icon-category"></i>
                    <span>Browse Categories</span>
                  </a>
                  <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          <i class="w-icon-tshirt2"></i>Fashion
                        </a>
                        <ul className="megamenu">
                          <li>
                            <h4 class="menu-title">Women</h4>
                            <hr class="divider" />
                            
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
