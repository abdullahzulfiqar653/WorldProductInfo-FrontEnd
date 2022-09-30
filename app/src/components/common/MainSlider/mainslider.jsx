import React from 'react';
import ManufacturerSlider from './childs/manufacturer/manufacturerSlider';
import CategoriesSlider from './childs/categories/categoriesslider';
import Banner from '../../../assets/images/shop/banner1.jpg';

const MainSlider = () => {
  return (
    <div className="page-content" style={{ marginTop: 10 }}>
      <div className="container">
        <div
          className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
          style={{ backgroundImage: `url(${Banner})`, backgroundColor: '#FFC74E', marginBottom: '40px !important' }}>
          <div className="banner-content">
            <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
            <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">Smart Wrist Watches</h3>
            <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">
              Discover Now<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <ManufacturerSlider />
        <CategoriesSlider />
      </div>
    </div>
  );
};

export default MainSlider;
