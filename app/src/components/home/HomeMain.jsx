import './MainSection/MainSection.css';
import React, { Component } from 'react';
import '../../assets/swiper/swiper-bundle.min.css';
import NewestProduct from './MainSection/NewestProduct';

class HomeMain extends Component {
  render() {
    return (
      <div className="main">
        <NewestProduct />
      </div>
    );
  }
}

export default HomeMain;
