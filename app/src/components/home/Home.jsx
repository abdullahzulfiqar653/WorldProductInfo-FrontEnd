import HomeMain from './HomeMain';
import Footer from '../common/Footer';
import React, { Component } from 'react';
import Navbar from '../common/NavBar/Navbar';

class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Navbar />
        <HomeMain />
        <Footer />
      </div>
    );
  }
}

export default Home;
