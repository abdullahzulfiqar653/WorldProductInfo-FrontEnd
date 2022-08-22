import React, { Component } from 'react';

class Cart extends Component {
  state = {
    cartstate: 'dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2',
  };

  render() {
    return (
      <div className={this.state.cartstate}>
        <div
          className="cart-overlay"
          onClick={() =>
            this.setState({
              cartstate: 'dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2',
            })
          }
        ></div>
        <a
          href="#"
          onClick={() =>
            this.setState({
              cartstate: 'dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2 opened',
            })
          }
          className="cart-toggle label-down link"
        >
          <i className="w-icon-cart">
            <span className="cart-count">0</span>
          </i>
          <span className="cart-label">Cart</span>
        </a>
        {/* <div className="dropdown-box">
          <div className="cart-header">
            <span>Shopping Cart</span>
            <a
              href="#"
              onClick={() =>
                this.setState({
                  cartstate:
                    "dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2",
                })
              }
              className="btn-close"
            >
              Close<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>

          <div className="products">
            <div className="product product-cart">
              <div className="product-detail">
                <a href="#" className="product-name">
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
                <a href="#">
                  <img
                    src="assets/images/cart/product-1.jpg"
                    alt="product"
                    height="84"
                    width="94"
                  />
                </a>
              </figure>
              <button className="btn btn-link btn-close" aria-label="button">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="product product-cart">
              <div className="product-detail">
                <a href="#" className="product-name">
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
                <a href="#">
                  <img
                    src="assets/images/cart/product-2.jpg"
                    alt="product"
                    width="84"
                    height="94"
                  />
                </a>
              </figure>
              <button className="btn btn-link btn-close" aria-label="button">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div className="cart-total">
            <label>Subtotal:</label>
            <span className="price">$58.67</span>
          </div>

          <div className="cart-action">
            <a href="#" className="btn btn-dark btn-outline btn-rounded">
              View Cart
            </a>
            <a href="#" className="btn btn-primary  btn-rounded">
              Checkout
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Cart;
