import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../assets/images/shop/banner1.jpg';

class IntroSection extends Component {
  render() {
    return (
      <div
        class="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6 br-xs"
        style={{ backgroundImage: `url(${Banner})`, backgroundColor: '#FFC74E' }}>
        <div className="banner-content">
          <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
          <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">Smart Watches</h3>
          <Link className="btn btn-dark btn-rounded btn-icon-right">
            Discover Now<i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroSection;
