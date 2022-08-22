import React, { Component } from 'react';
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
                      <a href="#">Term and Conditions</a>
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
                <a href="#">Men's T-shirt</a>
                <a href="#">Dresses</a>
                <a href="#">Men's Sneacker</a>
                <a href="#">Leather Backpack</a>
                <a href="#">Watches</a>
                <a href="#">Jeans</a>
                <a href="#">Sunglasses</a>
                <a href="#">Boots</a>
                <a href="#">Rayban</a>
                <a href="#">Acccessories</a>
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
