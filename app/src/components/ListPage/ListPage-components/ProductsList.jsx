import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Img1 from "../../../assets/images/shop/1.jpg";
import Img4 from "../../../assets/images/shop/3.jpg";
import Img5 from "../../../assets/images/shop/4.jpg";
import Img6 from "../../../assets/images/shop/5.jpg";
import Img7 from "../../../assets/images/shop/6.jpg";
import Img10 from "../../../assets/images/shop/8.jpg";
import Img8 from "../../../assets/images/shop/7-1.jpg";
import Img9 from "../../../assets/images/shop/7-2.jpg";
import Img2 from "../../../assets/images/shop/2-1.jpg";
import Img3 from "../../../assets/images/shop/2-2.jpg";
class ProductsList extends Component {
  render() {
    return (
      <div className="product-wrapper row cols-xl-2 cols-sm-1 cols-xs-2 cols-1">
        <div className="product product-list product-select">
          <figure className="product-media">
            <HashLink to="/product/1#header">
              <img src={Img1} alt="Product" width="330" height="338" />
            </HashLink>
            <div className="product-action-vertical">
              <HashLink
                to="/product/1#header"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></HashLink>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Electronics</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">3D Television</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$220.00 - $230.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a
                href="product-default.html"
                className="btn-product btn-cart"
                title="Add to Cart"
              >
                <i className="w-icon-cart"></i>Select Options
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img2} alt="Product" width="330" height="338" />
              <img src={Img3} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Electronics</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Alarm Clock With Lamp</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">
              <ins className="new-price">$30.00</ins>
              <del className="old-price">$60.00</del>
            </div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img4} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Electronics</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Apple Laptop</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$1,800.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img5} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Electronics</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Attachable Charge Alarm</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$15.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img6} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Fashion</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Best Travel Bag</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$83.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img7} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Sports</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Black Stunt Motor</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$374.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img8} alt="Product" width="330" height="338" />
              <img src={Img9} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Fashion</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Blue Sky Trunk</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$85.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
        <div className="product product-list">
          <figure className="product-media">
            <a href="product-default.html">
              <img src={Img10} alt="Product" width="330" height="338" />
            </a>
            <div className="product-action-vertical">
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              ></a>
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Beauty</a>
            </div>
            <h4 className="product-name">
              <a href="product-default.html">Bodycare Smooth Powder</a>
            </h4>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }}></span>
              </div>
              <a href="product-default.html" className="rating-reviews">
                (3 Reviews)
              </a>
            </div>
            <div className="product-price">$25.00</div>
            <div className="product-desc">
              Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
              tincidunt vitae semper quis lectus. Aliquam id diam maecenas
              ultricies…
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart" title="Add to Cart">
                <i className="w-icon-cart"></i> Add To Cart
              </a>
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Add to wishlist"
              ></a>
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              ></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
