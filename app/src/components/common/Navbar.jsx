import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import ENG from "../../assets/images/flags/eng.png";
import FRA from "../../assets/images/flags/fra.png";
import ENGFlag from "../../assets/images/flags/eng.png";

import Product1 from "../../assets/images/cart/product-1.jpg";
import Products2 from "../../assets/images/cart/product-2.jpg";
import DropDown from "./DropDown";

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <p className="welcome-msg">
                Welcome to Wolmart Store message or remove it!
              </p>
            </div>
            <div className="header-right">
              <div className="dropdown">
                <a href="#currency">USD</a>
                <div className="dropdown-box">
                  <a href="#USD">USD</a>
                  <a href="#EUR">EUR</a>
                </div>
              </div>

              <div className="dropdown">
                <a href="#language">
                  <img
                    src={ENG}
                    alt="ENG Flag"
                    width="14"
                    height="8"
                    className="dropdown-image"
                  />{" "}
                  ENG
                </a>
                <div className="dropdown-box">
                  <a href="#ENG">
                    <img
                      src={ENGFlag}
                      alt="ENG Flag"
                      width="14"
                      height="8"
                      className="dropdown-image"
                    />
                    ENG
                  </a>
                  <a href="#FRA">
                    <img
                      src={FRA}
                      alt="FRA Flag"
                      width="14"
                      height="8"
                      className="dropdown-image"
                    />
                    FRA
                  </a>
                </div>
              </div>
              <span className="divider d-lg-show"></span>
              <a href="blog.html" className="d-lg-show">
                Blog
              </a>
              <a href="contact-us.html" className="d-lg-show">
                Contact Us
              </a>
              <a href="my-account.html" className="d-lg-show">
                My Account
              </a>
              <a
                href="assets/ajax/login.html"
                className="d-lg-show login sign-in"
              >
                <i className="w-icon-account"></i>Sign In
              </a>
              <span className="delimiter d-lg-show">/</span>
              <a
                href="assets/ajax/login.html"
                className="ml-0 d-lg-show login register"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="header-left mr-md-4">
              <a
                href="#"
                className="mobile-menu-toggle  w-icon-hamburger"
                aria-label="menu-toggle"
              ></a>
              <a href="demo1.html" className="logo ml-lg-0">
                <img src={Logo} alt="logo" width="144" height="45" />
              </a>
              <form
                method="get"
                action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >
                <div className="select-box">
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
                <a href="tel:#" className="w-icon-call"></a>
                <div className="call-info d-lg-show">
                  <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <a href="mailto:#" className="text-capitalize">
                      Live Chat
                    </a>{" "}
                    or :
                  </h4>
                  <a
                    href="tel:#"
                    className="phone-number font-weight-bolder ls-50"
                  >
                    0(800)123-456
                  </a>
                </div>
              </div>
              <a
                className="wishlist label-down link d-xs-show"
                href="wishlist.html"
              >
                <i className="w-icon-heart"></i>
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </a>
              <a
                className="compare label-down link d-xs-show"
                href="compare.html"
              >
                <i className="w-icon-compare"></i>
                <span className="compare-label d-lg-show">Compare</span>
              </a>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay"></div>
                <a href="#" className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count">2</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </a>
                <div className="dropdown-box">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <a href="#" className="btn-close">
                      Close<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>

                  <div className="products">
                    <div className="product product-cart">
                      <div className="product-detail">
                        <a href="product-default.html" className="product-name">
                          Beige knitted elas
                          <br />
                          tic runner shoes
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$25.68</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={Product1}
                            alt="product"
                            height="84"
                            width="94"
                          />
                        </a>
                      </figure>
                      <button
                        className="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>

                    <div className="product product-cart">
                      <div className="product-detail">
                        <a href="product-default.html" className="product-name">
                          Blue utility pina
                          <br />
                          fore denim dress
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$32.99</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={Products2}
                            alt="product"
                            width="84"
                            height="94"
                          />
                        </a>
                      </figure>
                      <button
                        className="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">$58.67</span>
                  </div>

                  <div className="cart-action">
                    <a
                      href="cart.html"
                      className="btn btn-dark btn-outline btn-rounded"
                    >
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="btn btn-primary  btn-rounded"
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
                    className="category-toggle text-dark"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                    onClick={DropDown}
                  >
                    <i className="w-icon-category"></i>
                    <span>Browse Categories</span>
                  </a>
                </div>
                <nav class="main-nav">
                  <ul class="menu active-underline">
                    <li class="active">
                      <a href="demo1.html">Home</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html">Shop</a>

                      <ul class="megamenu">
                        <li>
                          <h4 class="menu-title">Shop Pages</h4>
                          <ul>
                            <li>
                              <a href="shop-banner-sidebar.html">
                                Banner With Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-boxed-banner.html">Boxed Banner</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Full Width Banner
                              </a>
                            </li>
                            <li>
                              <a href="shop-horizontal-filter.html">
                                Horizontal Filter
                                <span class="tip tip-hot">Hot</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-off-canvas.html">
                                Off Canvas Sidebar
                                <span class="tip tip-new">New</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-infinite-scroll.html">
                                Infinite Ajax Scroll
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-both-sidebar.html">Both Sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 class="menu-title">Shop Layouts</h4>
                          <ul>
                            <li>
                              <a href="shop-grid-3cols.html">3 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-4cols.html">4 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-5cols.html">5 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-6cols.html">6 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-7cols.html">7 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-8cols.html">8 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-list.html">List Mode</a>
                            </li>
                            <li>
                              <a href="shop-list-sidebar.html">
                                List Mode With Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 class="menu-title">Product Pages</h4>
                          <ul>
                            <li>
                              <a href="product-variable.html">
                                Variable Product
                              </a>
                            </li>
                            <li>
                              <a href="product-featured.html">
                                Featured &amp; Sale
                              </a>
                            </li>
                            <li>
                              <a href="product-accordion.html">
                                Data In Accordion
                              </a>
                            </li>
                            <li>
                              <a href="product-section.html">
                                Data In Sections
                              </a>
                            </li>
                            <li>
                              <a href="product-swatch.html">Image Swatch</a>
                            </li>
                            <li>
                              <a href="product-extended.html">Extended Info</a>
                            </li>
                            <li>
                              <a href="product-without-sidebar.html">
                                Without Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-video.html">
                                360<sup>o</sup> &amp; Video
                                <span class="tip tip-new">New</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 class="menu-title">Product Layouts</h4>
                          <ul>
                            <li>
                              <a href="product-default.html">
                                Default<span class="tip tip-hot">Hot</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-vertical.html">
                                Vertical Thumbs
                              </a>
                            </li>
                            <li>
                              <a href="product-grid.html">Grid Images</a>
                            </li>
                            <li>
                              <a href="product-masonry.html">Masonry</a>
                            </li>
                            <li>
                              <a href="product-gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="product-sticky-info.html">Sticky Info</a>
                            </li>
                            <li>
                              <a href="product-sticky-thumb.html">
                                Sticky Thumbs
                              </a>
                            </li>
                            <li>
                              <a href="product-sticky-both.html">Sticky Both</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="vendor-dokan-store.html">Vendor</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store-list.html">
                            Store Listing
                          </a>
                          <ul>
                            <li>
                              <a href="vendor-dokan-store-list.html">
                                Store listing 1
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcfm-store-list.html">
                                Store listing 2
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcmp-store-list.html">
                                Store listing 3
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wc-store-list.html">
                                Store listing 4
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="vendor-dokan-store.html">Vendor Store</a>
                          <ul>
                            <li>
                              <a href="vendor-dokan-store.html">
                                Vendor Store 1
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcfm-store-product-grid.html">
                                Vendor Store 2
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcmp-store-product-grid.html">
                                Vendor Store 3
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wc-store-product-grid.html">
                                Vendor Store 4
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Classic</a>
                        </li>
                        <li>
                          <a href="blog-listing.html">Listing</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-2cols.html">Grid 2 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-3cols.html">Grid 3 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-4cols.html">Grid 4 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar.html">Grid sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">Masonry</a>
                          <ul>
                            <li>
                              <a href="blog-masonry-2cols.html">
                                Masonry 2 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3cols.html">
                                Masonry 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4cols.html">
                                Masonry 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-sidebar.html">
                                Masonry sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-mask-grid.html">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="post-single.html">Single Post</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about-us.html">Pages</a>
                      <ul>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="become-a-vendor.html">Become A Vendor</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="error-404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                      <ul>
                        <li>
                          <a href="element-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="element-alerts.html">
                            Alert &amp; Notification
                          </a>
                        </li>
                        <li>
                          <a href="element-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="element-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="element-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="element-icons.html">Icons</a>
                        </li>
                        <li>
                          <a href="element-icon-boxes.html">Icon Boxes</a>
                        </li>
                        <li>
                          <a href="element-instagrams.html">Instagrams</a>
                        </li>
                        <li>
                          <a href="element-categories.html">Product Category</a>
                        </li>
                        <li>
                          <a href="element-products.html">Products</a>
                        </li>
                        <li>
                          <a href="element-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="element-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="element-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="element-typography.html">Typography</a>
                        </li>

                        <li>
                          <a href="element-vendors.html">Vendors</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="header-right">
                <a href="#" class="d-xl-show">
                  <i class="w-icon-map-marker mr-1"></i>Track Order
                </a>
                <a href="#">
                  <i class="w-icon-sale"></i>Daily Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
