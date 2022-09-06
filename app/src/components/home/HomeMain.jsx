import './MainSection/MainSection.css';
import React, { Component } from 'react';
import '../../assets/swiper/swiper-bundle.min.css';
import IntroSection from './MainSection/IntroSection';
import NewestProduct from './MainSection/NewestProduct';

class HomeMain extends Component {
  render() {
    return (
      <div className="main">
        <IntroSection />
        <NewestProduct />
      </div>
    );
  }
}

export default HomeMain;
