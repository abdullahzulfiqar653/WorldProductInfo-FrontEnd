import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <div class="container">
        <div
          class="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6"
          data-swiper-options="{
                    'slidesPerView': 1,
                    'loop': false,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '1200': {
                            'slidesPerView': 4
                        }
                    }
                }"
        >
          <div class="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
            <div class="swiper-slide icon-box icon-box-side icon-box-primary">
              <span class="icon-box-icon icon-shipping">
                <i class="w-icon-truck"></i>
              </span>
              <div class="icon-box-content">
                <h4 class="icon-box-title font-weight-bold mb-1">
                  Free Shipping & Returns
                </h4>
                <p class="text-default">For all orders over $99</p>
              </div>
            </div>
            <div class="swiper-slide icon-box icon-box-side icon-box-primary">
              <span class="icon-box-icon icon-payment">
                <i class="w-icon-bag"></i>
              </span>
              <div class="icon-box-content">
                <h4 class="icon-box-title font-weight-bold mb-1">
                  Secure Payment
                </h4>
                <p class="text-default">We ensure secure payment</p>
              </div>
            </div>
            <div class="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
              <span class="icon-box-icon icon-money">
                <i class="w-icon-money"></i>
              </span>
              <div class="icon-box-content">
                <h4 class="icon-box-title font-weight-bold mb-1">
                  Money Back Guarantee
                </h4>
                <p class="text-default">Any back within 30 days</p>
              </div>
            </div>
            <div class="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
              <span class="icon-box-icon icon-chat">
                <i class="w-icon-chat"></i>
              </span>
              <div class="icon-box-content">
                <h4 class="icon-box-title font-weight-bold mb-1">
                  Customer Support
                </h4>
                <p class="text-default">Call or email us 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row category-banner-wrapper appear-animate pt-6 pb-8">
          <div class="col-md-6 mb-4">
            <div class="banner banner-fixed br-xs">
              <figure>
                <img
                  src="assets/images/demos/demo1/categories/1-1.jpg"
                  alt="Category Banner"
                  width="610"
                  height="160"
                  style={{ backgroundColor: "#ecedec" }}
                />
              </figure>
              <div class="banner-content y-50 mt-0">
                <h5 class="banner-subtitle font-weight-normal text-dark">
                  Get up to{" "}
                  <span class="text-secondary font-weight-bolder text-uppercase ls-25">
                    20% Off
                  </span>
                </h5>
                <h3 class="banner-title text-uppercase">
                  Sports Outfits
                  <br />
                  <span class="font-weight-normal text-capitalize">
                    Collection
                  </span>
                </h3>
                <div class="banner-price-info font-weight-normal">
                  Starting at{" "}
                  <span class="text-secondary                       font-weight-bolder">
                    $170.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="banner banner-fixed br-xs">
              <figure>
                <img
                  src="assets/images/demos/demo1/categories/1-2.jpg"
                  alt="Category Banner"
                  width="610"
                  height="160"
                  style={{ backgroundColor: "#636363" }}
                />
              </figure>
              <div class="banner-content y-50 mt-0">
                <h5 class="banner-subtitle font-weight-normal text-capitalize">
                  New Arrivals
                </h5>
                <h3 class="banner-title text-white text-uppercase">
                  Accessories
                  <br />
                  <span class="font-weight-normal text-capitalize">
                    Collection
                  </span>
                </h3>
                <div class="banner-price-info text-white font-weight-normal text-capitalize">
                  Only From
                  <span class="text-secondary font-weight-bolder">$90.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row deals-wrapper appear-animate mb-8">
          <div class="col-lg-9 mb-4">
            <div class="single-product h-100 br-sm">
              <h4 class="title-sm title-underline font-weight-bolder ls-normal">
                Deals Hot of The Day
              </h4>
              <div class="swiper">
                <div
                  class="swiper-container swiper-theme nav-top swiper-nav-lg"
                  data-swiper-options="{
                                    'spaceBetween': 20,
                                    'slidesPerView': 1
                                }"
                >
                  <div class="swiper-wrapper row cols-1 gutter-no">
                    <div class="swiper-slide">
                      <div class="product product-single row">
                        <div class="col-md-6">
                          <div class="product-gallery product-gallery-sticky product-gallery-vertical">
                            <div class="swiper-container product-single-swiper swiper-theme nav-inner">
                              <div class="swiper-wrapper row cols-1 gutter-no">
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-1-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-1-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-2-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-2-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-3-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-3-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-4-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-4-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <button class="swiper-button-next"></button>
                              <button class="swiper-button-prev"></button>
                              <div class="product-label-group">
                                <label class="product-label label-discount">
                                  25% Off
                                </label>
                              </div>
                            </div>
                            <div
                              class="product-thumbs-wrap swiper-container"
                              data-swiper-options="{
                                                            'direction': 'vertical',
                                                            'breakpoints': {
                                                                '0': {
                                                                    'direction': 'horizontal',
                                                                    'slidesPerView': 4
                                                                },
                                                                '992': {
                                                                    'direction': 'vertical',
                                                                    'slidesPerView': 'auto'
                                                                }
                                                            }
                                                        }"
                            >
                              <div class="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-1-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-2-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-3-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-4-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="product-details scrollable">
                            <h2 class="product-title mb-1">
                              <a href="product-default.html">
                                Coat Pool Comfort Jacket
                              </a>
                            </h2>

                            <hr class="product-divider" />

                            <div class="product-price">
                              <ins class="new-price ls-50">
                                $150.00 - $180.00
                              </ins>
                            </div>

                            <div class="product-countdown-container flex-wrap">
                              <label class="mr-2 text-default">
                                Offer Ends In:
                              </label>
                              <div
                                class="product-countdown countdown-compact"
                                data-until="2022, 12, 31"
                                data-compact="true"
                              >
                                629 days, 11: 59: 52
                              </div>
                            </div>

                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "80%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                              <a href="#" class="rating-reviews">
                                (3 Reviews)
                              </a>
                            </div>

                            <div class="product-form product-variation-form product-size-swatch mb-3">
                              <label class="mb-1">Size:</label>
                              <div class="flex-wrap d-flex align-items-center product-variations">
                                <a href="#" class="size">
                                  Extra Large
                                </a>
                                <a href="#" class="size">
                                  Large
                                </a>
                                <a href="#" class="size">
                                  Medium
                                </a>
                                <a href="#" class="size">
                                  Small
                                </a>
                              </div>
                              <a href="#" class="product-variation-clean">
                                Clean All
                              </a>
                            </div>

                            <div class="product-variation-price">
                              <span></span>
                            </div>

                            <div class="product-form pt-4">
                              <div class="product-qty-form mb-2 mr-2">
                                <div class="input-group">
                                  <input
                                    class="quantity form-control"
                                    type="number"
                                    min="1"
                                    max="10000000"
                                  />
                                  <button class="quantity-plus w-icon-plus"></button>
                                  <button class="quantity-minus w-icon-minus"></button>
                                </div>
                              </div>
                              <button class="btn btn-primary btn-cart">
                                <i class="w-icon-cart"></i>
                                <span>Add to Cart</span>
                              </button>
                            </div>

                            <div class="social-links-wrapper mt-1">
                              <div class="social-links">
                                <div class="social-icons social-no-color border-thin">
                                  <a
                                    href="#"
                                    class="social-icon social-facebook w-icon-facebook"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-twitter w-icon-twitter"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-pinterest fab fa-pinterest-p"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-whatsapp fab fa-whatsapp"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-youtube fab fa-linkedin-in"
                                  ></a>
                                </div>
                              </div>
                              <span class="divider d-xs-show"></span>
                              <div class="product-link-wrapper d-flex">
                                <a
                                  href="#"
                                  class="btn-product-icon btn-wishlist w-icon-heart"
                                ></a>
                                <a
                                  href="#"
                                  class="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="product product-single row">
                        <div class="col-md-6">
                          <div class="product-gallery product-gallery-sticky product-gallery-vertical">
                            <div class="swiper-container product-single-swiper swiper-theme nav-inner">
                              <div class="swiper-wrapper row cols-1 gutter-no">
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/2-1-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/2-1-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/2-2-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/2-2-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/2-3-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/2-3-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                                <div class="swiper-slide">
                                  <figure class="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/2-4-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/2-4-800x900.jpg"
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <button class="swiper-button-next"></button>
                              <button class="swiper-button-prev"></button>
                              <div class="product-label-group">
                                <label class="product-label label-discount">
                                  25% Off
                                </label>
                              </div>
                            </div>
                            <div
                              class="product-thumbs-wrap swiper-container"
                              data-swiper-options="{
                                                            'breakpoints': {
                                                                '992': {
                                                                    'direction': 'vertical',
                                                                    'slidesPerView': 'auto'
                                                                }
                                                            }
                                                        }"
                            >
                              <div class="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/2-1-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/2-2-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/2-3-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                                <div class="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/2-4-600x675.jpg"
                                    alt="Product thumb"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="product-details scrollable">
                            <h2 class="product-title mb-1">
                              <a href="product-default.html">
                                Coat Pool Comfort Jacket
                              </a>
                            </h2>

                            <hr class="product-divider" />

                            <div class="product-price">
                              <ins class="new-price ls-50">
                                $150.00 - $180.00
                              </ins>
                            </div>

                            <div class="product-countdown-container flex-wrap">
                              <label class="mr-2 text-default">
                                Offer Ends In:
                              </label>
                              <div
                                class="product-countdown countdown-compact"
                                data-until="2022, 12, 31"
                                data-compact="true"
                              >
                                629 days, 11: 59: 52
                              </div>
                            </div>

                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "80%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                              <a href="#" class="rating-reviews">
                                (3 Reviews)
                              </a>
                            </div>

                            <div class="product-form product-variation-form product-size-swatch mb-3">
                              <label class="mb-1">Size:</label>
                              <div class="flex-wrap d-flex align-items-center product-variations">
                                <a href="#" class="size">
                                  Extra Large
                                </a>
                                <a href="#" class="size">
                                  Large
                                </a>
                                <a href="#" class="size">
                                  Medium
                                </a>
                                <a href="#" class="size">
                                  Small
                                </a>
                              </div>
                              <a href="#" class="product-variation-clean">
                                Clean All
                              </a>
                            </div>

                            <div class="product-variation-price">
                              <span></span>
                            </div>

                            <div class="product-form pt-4">
                              <div class="product-qty-form mb-2 mr-2">
                                <div class="input-group">
                                  <input
                                    class="quantity form-control"
                                    type="number"
                                    min="1"
                                    max="10000000"
                                  />
                                  <button class="quantity-plus w-icon-plus"></button>
                                  <button class="quantity-minus w-icon-minus"></button>
                                </div>
                              </div>
                              <button class="btn btn-primary btn-cart">
                                <i class="w-icon-cart"></i>
                                <span>Add to Cart</span>
                              </button>
                            </div>

                            <div class="social-links-wrapper mt-1">
                              <div class="social-links">
                                <div class="social-icons social-no-color border-thin">
                                  <a
                                    href="#"
                                    class="social-icon social-facebook w-icon-facebook"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-twitter w-icon-twitter"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-pinterest fab fa-pinterest-p"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-whatsapp fab fa-whatsapp"
                                  ></a>
                                  <a
                                    href="#"
                                    class="social-icon social-youtube fab fa-linkedin-in"
                                  ></a>
                                </div>
                              </div>
                              <span class="divider d-xs-show"></span>
                              <div class="product-link-wrapper d-flex">
                                <a
                                  href="#"
                                  class="btn-product-icon btn-wishlist w-icon-heart"
                                ></a>
                                <a
                                  href="#"
                                  class="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="swiper-button-prev"></button>
                  <button class="swiper-button-next"></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="widget widget-products widget-products-bordered h-100">
              <div class="widget-body br-sm h-100">
                <h4 class="title-sm title-underline font-weight-bolder ls-normal mb-2">
                  Top 20 Best Seller
                </h4>
                <div class="swiper">
                  <div
                    class="swiper-container swiper-theme nav-top"
                    data-swiper-options="{
                                        'slidesPerView': 1,
                                        'spaceBetween': 20,
                                        'breakpoints': {
                                            '576': {
                                                'slidesPerView': 2
                                            },
                                            '768': {
                                                'slidesPerView': 3
                                            },
                                            '992': {
                                                'slidesPerView': 1
                                            }
                                        }
                                    }"
                  >
                    <div class="swiper-wrapper row cols-lg-1 cols-md-3">
                      <div class="swiper-slide product-widget-wrap">
                        <div class="product product-widget bb-no">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-1.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">Kitchen Cooker</a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "60%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$150.60</ins>
                            </div>
                          </div>
                        </div>
                        <div class="product product-widget bb-no">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-2.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">
                                Professional Pixel Camera
                              </a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "60%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$215.68</ins>
                              <del class="old-price">$230.45</del>
                            </div>
                          </div>
                        </div>
                        <div class="product product-widget">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-3.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">
                                Sport Women’s Wear
                              </a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "60%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$220.20</ins>
                              <del class="old-price">$300.62</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide product-widget-wrap">
                        <div class="product product-widget bb-no">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-4.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">Latest Speaker</a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "60%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$250.68</ins>
                            </div>
                          </div>
                        </div>
                        <div class="product product-widget bb-no">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-5.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">
                                Men's Black Wrist Watch
                              </a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$135.60</ins>
                              <del class="old-price">$155.70</del>
                            </div>
                          </div>
                        </div>
                        <div class="product product-widget">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-6.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">Wash Machine</a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$215.68</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide product-widget-wrap">
                        <div class="product product-widget bb-no">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-7.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">Security Guard</a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$320.00</ins>
                            </div>
                          </div>
                        </div>
                        <div class="product product-widget bb-no">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-8.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">
                                Apple Super Notecom
                              </a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$243.30</ins>
                              <del class="old-price">$253.50</del>
                            </div>
                          </div>
                        </div>
                        <div class="product product-widget">
                          <figure class="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-9.jpg"
                                alt="Product"
                                width="105"
                                height="118"
                              />
                            </a>
                          </figure>
                          <div class="product-details">
                            <h4 class="product-name">
                              <a href="product-default.html">HD Television</a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings-full">
                                <span
                                  class="ratings"
                                  style={{ width: "60%" }}
                                ></span>
                                <span class="tooltiptext tooltip-top"></span>
                              </div>
                            </div>
                            <div class="product-price">
                              <ins class="new-price">$450.68</ins>
                              <del class="old-price">$500.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="swiper-button-next"></button>
                    <button class="swiper-button-prev"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
