import { Link } from 'react-router-dom';
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
        <Link
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
        </Link>
      </div>
    );
  }
}

export default Cart;
