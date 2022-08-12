import React, { Component } from "react";
import Img1 from "../../../assets/images/products/default/5.jpg";
import Img2 from "../../../assets/images/products/default/6.jpg";
import Img5 from "../../../assets/images/products/default/8.jpg";
import Img3 from "../../../assets/images/products/default/7-1.jpg";
import Img4 from "../../../assets/images/products/default/7-2.jpg";
class SimilarProducts extends Component {
  render() {
    return (
      <section className="related-product-section">
        <div className="title-link-wrapper mb-4">
          <h4 className="title">Similar Products</h4>
          <a
            href="#"
            className="btn btn-dark btn-link btn-slide-right btn-icon-right"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <div className="swiper-container swiper-theme">
          <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
                  <img src={Img1} alt="Product" width="300" height="338" />
                </a>
                <div className="product-action-vertical">
                  <a
                    href="#"
                    className="btn-product-icon btn-cart w-icon-cart"
                    title="Add to cart"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <h4 className="product-name">
                  <a href="product-default.html">Drone</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    (3 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">$632.00</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
                  <img src={Img2} alt="Product" width="300" height="338" />
                </a>
                <div className="product-action-vertical">
                  <a
                    href="#"
                    className="btn-product-icon btn-cart w-icon-cart"
                    title="Add to cart"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <h4 className="product-name">
                  <a href="product-default.html">Official Camera</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    (3 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">
                    <ins className="new-price">$263.00</ins>
                    <del className="old-price">$300.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
                  <img src={Img3} alt="Product" width="300" height="338" />
                  <img src={Img4} alt="Product" width="300" height="338" />
                </a>
                <div className="product-action-vertical">
                  <a
                    href="#"
                    className="btn-product-icon btn-cart w-icon-cart"
                    title="Add to cart"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <h4 className="product-name">
                  <a href="product-default.html">Phone Charge Pad</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    (8 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
                  <img src={Img5} alt="Product" width="300" height="338" />
                </a>
                <div className="product-action-vertical">
                  <a
                    href="#"
                    className="btn-product-icon btn-cart w-icon-cart"
                    title="Add to cart"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <h4 className="product-name">
                  <a href="product-default.html">Fashionalble Pencil</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    (9 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">$50.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SimilarProducts;
