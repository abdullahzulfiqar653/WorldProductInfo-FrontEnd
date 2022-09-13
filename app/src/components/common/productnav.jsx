import React from 'react';
import { NavLink } from 'react-router-dom';

function ProductNav(linkList) {
  return (
    <nav className="breadcrumb-nav" style={{ padding: '10px' }}>
      <div className="container">
        <ul className="breadcrumb bb-no">
          {linkList.linkList.map((obj) => (
            <li key={obj.title}>
              <NavLink to={obj.link}>{obj.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default ProductNav;
