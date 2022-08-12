import React, { Component } from "react";
import Img4 from "../../../assets/images/products/default/2.jpg";
import Img1 from "../../../assets/images/products/default/3.jpg";
import Img2 from "../../../assets/images/products/default/1-1.jpg";
import Img3 from "../../../assets/images/products/default/1-2.jpg";
import Img5 from "../../../assets/images/products/default/4-1.jpg";
import Img6 from "../../../assets/images/products/default/4-2.jpg";
class RelatedProducts extends Component {
  render() {
    return (
      <section className="vendor-product-section">
        <div className="title-link-wrapper mb-4">
          <h4 className="title text-left">More Products From This Vendor</h4>
          <a
            href="#"
            className="btn btn-dark btn-link btn-slide-right btn-icon-right"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <div
          className="swiper-container swiper-theme"
          data-swiper-options="{
                                    'spaceBetween': 20,
                                    'slidesPerView': 2,
                                    'breakpoints': {
                                        '576': {
                                            'slidesPerView': 3
                                        },
                                        '768': {
                                            'slidesPerView': 4
                                        },
                                        '992': {
                                            'slidesPerView': 3
                                        }
                                    }
                                }"
        >
          <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
                  <img src={Img2} alt="Product" width="300" height="338" />
                  <img src={Img3} alt="Product" width="300" height="338" />
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
                <div className="product-cat">
                  <a href="shop-banner-sidebar.html">Accessories</a>
                </div>
                <h4 className="product-name">
                  <a href="product-default.html">Sticky Pencil</a>
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
                  <div className="product-price">$20.00</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
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
                <div className="product-cat">
                  <a href="shop-banner-sidebar.html">Electronics</a>
                </div>
                <h4 className="product-name">
                  <a href="product-default.html">
                    Mini Multi-Functional Cooker
                  </a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    (5 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">
                    <ins className="new-price">$480.00</ins>
                    <del className="old-price">$534.00</del>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="product-cat">
                  <a href="shop-banner-sidebar.html">Sports</a>
                </div>
                <h4 className="product-name">
                  <a href="product-default.html">Skate Pan</a>
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
                    <ins className="new-price">$278.00</ins>
                    <del className="old-price">$310.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="product-default.html">
                  <img src={Img5} alt="Product" width="300" height="338" />
                  <img src={Img6} alt="Product" width="300" height="338" />
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
                <div className="product-cat">
                  <a href="shop-banner-sidebar.html">Accessories</a>
                </div>
                <h4 className="product-name">
                  <a href="product-default.html">Clip Attachment</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    (5 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">$40.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RelatedProducts;
