import "./css/button.css";
import { show } from "./custome";
import React, { Component } from "react";
import SimilarProducts from "./SimilarProducts";
import RelatedProducts from "./RelatedProducts";
import ProductImageGallery from "./ProductImageGallery";
import Brand1 from "../../../assets/images/products/brand/brand-1.jpg";
import Banner1 from "../../../assets/images/products/video-banner-610x300.jpg";
class ProductDescription extends Component {
  componentDidMount() {
    show(
      `#enhanced-overview-section`,
      document.getElementById("enhanced-overview")
    );
  }
  navigation = (e) => {
    show(`#${e.target.id}-section`, e.target);
  };
  render() {
    return (
      <div className="page-content">
        <div className="container">
          <div className="main-content">
            <div className="product product-single row">
              <div className="col-md-6 mb-6">
                <ProductImageGallery />
              </div>
              <div className="col-md-6 mb-4 mb-md-6">
                <div
                  className="product-details"
                  data-sticky-options="{'minWidth': 767}"
                >
                  <h1 className="product-title">
                    Electronics Black Wrist Watch
                  </h1>
                  <div className="product-bm-wrapper">
                    <figure className="brand">
                      <img src={Brand1} alt="Brand" width="102" height="48" />
                    </figure>
                    <div className="product-meta">
                      <div className="product-categories">
                        Category:
                        <span className="product-category">
                          <a href="#">Electronics</a>
                        </span>
                      </div>
                      <div className="product-sku">
                        SKU: <span>MS46891340</span>
                      </div>
                    </div>
                  </div>

                  <hr className="product-divider" />

                  <div className="product-price">
                    <ins className="new-price">$40.00</ins>
                  </div>

                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a
                      href="#product-tab-reviews"
                      className="rating-reviews scroll-to"
                    >
                      (3 Reviews)
                    </a>
                  </div>

                  <div className="product-short-desc">
                    <ul className="list-type-check list-style-none">
                      <li>
                        Ultrices eros in cursus turpis massa cursus mattis.
                      </li>
                      <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                      <li>
                        Aliquam id diam maecenas ultricies mi eget mauris.
                      </li>
                    </ul>
                  </div>

                  <hr className="product-divider" />

                  <div className="product-form product-variation-form product-color-swatch">
                    <label>Color:</label>
                    <div className="d-flex align-items-center product-variations">
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: " #ffcc01" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#ca6d00" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#1c93cb" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#ccc" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#333" }}
                      ></a>
                    </div>
                  </div>
                  <div className="product-form product-variation-form product-size-swatch">
                    <label className="mb-1">Size:</label>
                    <div className="flex-wrap d-flex align-items-center product-variations">
                      <a href="#" className="size">
                        Small
                      </a>
                      <a href="#" className="size">
                        Medium
                      </a>
                      <a href="#" className="size">
                        Large
                      </a>
                      <a href="#" className="size">
                        Extra Large
                      </a>
                    </div>
                    <a href="#" className="product-variation-clean">
                      Clean All
                    </a>
                  </div>

                  <div className="product-variation-price">
                    <span></span>
                  </div>

                  <div className="fix-bottom product-sticky-content sticky-content">
                    <div className="product-form container">
                      <div className="product-qty-form">
                        <div className="input-group">
                          <input
                            className="quantity form-control"
                            type="number"
                            min="1"
                            max="10000000"
                          />
                          <button className="quantity-plus w-icon-plus"></button>
                          <button className="quantity-minus w-icon-minus"></button>
                        </div>
                      </div>
                      <button className="btn btn-primary btn-cart">
                        <i className="w-icon-cart"></i>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>

                  <div className="social-links-wrapper">
                    <div className="social-links">
                      <div className="social-icons social-no-color border-thin">
                        <a
                          href="#"
                          className="social-icon social-facebook w-icon-facebook"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-twitter w-icon-twitter"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-pinterest fab fa-pinterest-p"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-whatsapp fab fa-whatsapp"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-youtube fab fa-linkedin-in"
                        ></a>
                      </div>
                    </div>
                    <span className="divider d-xs-show"></span>
                    <div className="product-link-wrapper d-flex">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist w-icon-heart"
                      >
                        <span></span>
                      </a>
                      <a
                        href="#"
                        className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                      >
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
              <ul className="nav nav-tabs" role="tablist" id="tabs">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="enhanced-overview"
                  >
                    Enhanced View
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="basic-overview"
                  >
                    Basic Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="specifications"
                  >
                    Specifications
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.navigation}
                    className="nav-link"
                    id="gallery"
                  >
                    Gallery
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="accessories"
                  >
                    Options & Accessories
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="tab-content">
                <div className="tab-pane" id="enhanced-overview-section">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-5">
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Detail
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt arcu cursus vitae
                        congue mauris. Sagittis id consectetur purus ut. Tellus
                        rutrum tellus pelle Vel pretium lectus quam id leo in
                        vitae turpis massa.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam a magna porttitor, dictum risus nec, faucibus
                          sapien.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="banner banner-video product-video br-xs">
                        <figure className="banner-media">
                          <a href="#">
                            <img
                              src={Banner1}
                              alt="banner"
                              width="610"
                              height="300"
                              style={{ backgroundColor: "#bebebe" }}
                            />
                          </a>
                          <a
                            className="btn-play-video btn-iframe"
                            href="assets/video/memory-of-a-woman.mp4"
                          ></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="row cols-md-3">
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span className="mr-3">1.</span>Free Shipping &amp;
                        Return
                      </h5>
                      <p className="detail pl-5">
                        We offer free shipping for products on orders above 50$
                        and offer free delivery for all orders in US.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>2.</span>Free and Easy Returns
                      </h5>
                      <p className="detail pl-5">
                        We guarantee our products and you could get back all of
                        your money anytime you want in 30 days.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>3.</span>Special Financing
                      </h5>
                      <p className="detail pl-5">
                        Get 20%-50% off items over 50$ for a month or over 250$
                        for a year with our special credit card.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="basic-overview-section">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-5">
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Detail
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt arcu cursus vitae
                        congue mauris. Sagittis id consectetur purus ut. Tellus
                        rutrum tellus pelle Vel pretium lectus quam id leo in
                        vitae turpis massa.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam a magna porttitor, dictum risus nec, faucibus
                          sapien.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="banner banner-video product-video br-xs">
                        <figure className="banner-media">
                          <a href="#">
                            <img
                              src={Banner1}
                              alt="banner"
                              width="610"
                              height="300"
                              // style=background-color: #bebebe;
                            />
                          </a>
                          <a
                            className="btn-play-video btn-iframe"
                            href="assets/video/memory-of-a-woman.mp4"
                          ></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="row cols-md-3">
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span className="mr-3">1.</span>Free Shipping &amp;
                        Return
                      </h5>
                      <p className="detail pl-5">
                        We offer free shipping for products on orders above 50$
                        and offer free delivery for all orders in US.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>2.</span>Free and Easy Returns
                      </h5>
                      <p className="detail pl-5">
                        We guarantee our products and you could get back all of
                        your money anytime you want in 30 days.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>3.</span>Special Financing
                      </h5>
                      <p className="detail pl-5">
                        Get 20%-50% off items over 50$ for a month or over 250$
                        for a year with our special credit card.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="specifications-section">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-5">
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Detail
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt arcu cursus vitae
                        congue mauris. Sagittis id consectetur purus ut. Tellus
                        rutrum tellus pelle Vel pretium lectus quam id leo in
                        vitae turpis massa.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam a magna porttitor, dictum risus nec, faucibus
                          sapien.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="banner banner-video product-video br-xs">
                        <figure className="banner-media">
                          <a href="#">
                            <img
                              src={Banner1}
                              alt="banner"
                              width="610"
                              height="300"
                              // style=background-color: #bebebe;
                            />
                          </a>
                          <a
                            className="btn-play-video btn-iframe"
                            href="assets/video/memory-of-a-woman.mp4"
                          ></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="row cols-md-3">
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span className="mr-3">1.</span>Free Shipping &amp;
                        Return
                      </h5>
                      <p className="detail pl-5">
                        We offer free shipping for products on orders above 50$
                        and offer free delivery for all orders in US.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>2.</span>Free and Easy Returns
                      </h5>
                      <p className="detail pl-5">
                        We guarantee our products and you could get back all of
                        your money anytime you want in 30 days.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>3.</span>Special Financing
                      </h5>
                      <p className="detail pl-5">
                        Get 20%-50% off items over 50$ for a month or over 250$
                        for a year with our special credit card.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="gallery-section">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-5">
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Detail
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt arcu cursus vitae
                        congue mauris. Sagittis id consectetur purus ut. Tellus
                        rutrum tellus pelle Vel pretium lectus quam id leo in
                        vitae turpis massa.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam a magna porttitor, dictum risus nec, faucibus
                          sapien.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="banner banner-video product-video br-xs">
                        <figure className="banner-media">
                          <a href="#">
                            <img
                              src={Banner1}
                              alt="banner"
                              width="610"
                              height="300"
                              // style=background-color: #bebebe;
                            />
                          </a>
                          <a
                            className="btn-play-video btn-iframe"
                            href="assets/video/memory-of-a-woman.mp4"
                          ></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="row cols-md-3">
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span className="mr-3">1.</span>Free Shipping &amp;
                        Return
                      </h5>
                      <p className="detail pl-5">
                        We offer free shipping for products on orders above 50$
                        and offer free delivery for all orders in US.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>2.</span>Free and Easy Returns
                      </h5>
                      <p className="detail pl-5">
                        We guarantee our products and you could get back all of
                        your money anytime you want in 30 days.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>3.</span>Special Financing
                      </h5>
                      <p className="detail pl-5">
                        Get 20%-50% off items over 50$ for a month or over 250$
                        for a year with our special credit card.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="accessories-section">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-5">
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Detail
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt arcu cursus vitae
                        congue mauris. Sagittis id consectetur purus ut. Tellus
                        rutrum tellus pelle Vel pretium lectus quam id leo in
                        vitae turpis massa.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam a magna porttitor, dictum risus nec, faucibus
                          sapien.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="banner banner-video product-video br-xs">
                        <figure className="banner-media">
                          <a href="#">
                            <img
                              src={Banner1}
                              alt="banner"
                              width="610"
                              height="300"
                              // style=background-color: #bebebe;
                            />
                          </a>
                          <a
                            className="btn-play-video btn-iframe"
                            href="assets/video/memory-of-a-woman.mp4"
                          ></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="row cols-md-3">
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span className="mr-3">1.</span>Free Shipping &amp;
                        Return
                      </h5>
                      <p className="detail pl-5">
                        We offer free shipping for products on orders above 50$
                        and offer free delivery for all orders in US.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>2.</span>Free and Easy Returns
                      </h5>
                      <p className="detail pl-5">
                        We guarantee our products and you could get back all of
                        your money anytime you want in 30 days.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h5 className="sub-title font-weight-bold">
                        <span>3.</span>Special Financing
                      </h5>
                      <p className="detail pl-5">
                        Get 20%-50% off items over 50$ for a month or over 250$
                        for a year with our special credit card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <SimilarProducts />
              <RelatedProducts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
