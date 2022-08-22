import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PageNav extends Component {
  render() {
    return (
      <nav className="breadcrumb-nav" style={{ padding: '10px' }}>
        <div className="container">
          <ul className="breadcrumb bb-no">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product-list">Products List</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default PageNav;
