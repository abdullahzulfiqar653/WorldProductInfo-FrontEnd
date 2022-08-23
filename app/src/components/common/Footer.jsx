import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  <ul className="widget-body">
                    <li>
                      <Link to="/home">Term and Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="widget widget-category">
              <div className="category-box">
                <h6 className="category-name">Clothing & Apparel:</h6>
                <Link to="/home">Men's T-shirt</Link>
                <Link to="/home">Dresses</Link>
                <Link to="/home">Men's Sneacker</Link>
                <Link to="/home">Leather Backpack</Link>
                <Link to="/home">Watches</Link>
                <Link to="/home">Jeans</Link>
                <Link to="/home">Sunglasses</Link>
                <Link to="/home">Boots</Link>
                <Link to="/home">Rayban</Link>
                <Link to="/home">Acccessories</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-left">
              <p className="copyright">Copyright © 2022 GFK Etilize. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
