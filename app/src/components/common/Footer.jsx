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
                  <h4 className="widget-title">World Product Info</h4>
                  <ul className="widget-body">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="widget widget-category">
              <div className="category-box">
                <h6 className="category-name">Popular Categories</h6>
                <Link to={`/product-list/?categoryid=10468&flag=category#header`}>Systems</Link>
                <Link to={`/product-list/?categoryid=10153&flag=category#header`}>Printers</Link>
                <Link to={`/product-list/?categoryid=10145&flag=category#header`}>Display</Link>
                <Link to={`/product-list/?categoryid=10040&flag=category#header`}>Network</Link>
                <Link to={`/product-list/?categoryid=5132&flag=category#header`}>Devices</Link>
                <Link to={`/product-list/?categoryid=4900&flag=category#header`}>Accessories</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-left">
              <p className="copyright">Copyright © 2022 World Product Info. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
