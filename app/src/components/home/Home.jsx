import HomeMain from './HomeMain';
import Footer from '../common/Footer';
import React, { Component } from 'react';
import Navbar from '../common/NavBar/Navbar';
import MainSlider from '../common/MainSlider/mainslider';

class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Navbar />
        <MainSlider />
        <HomeMain />
        <Footer />
      </div>
    );
  }
}

export default Home;
