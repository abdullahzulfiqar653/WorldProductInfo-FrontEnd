import { Link } from "react-router-dom";
import React, { Component } from "react";

class ProductNav extends Component {
  render() {
    return (
      <nav className="breadcrumb-nav container" style={{ padding: "10px" }}>
        <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Products</li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default ProductNav;
