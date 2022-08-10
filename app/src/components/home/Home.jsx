import HomeMain from "./HomeMain";
import Navbar from "../common/NavBar/Navbar";

import React, { Component } from "react";

import Footer from "../common/Footer";
import LastSection from "./LastSection";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="page-wrapper">
          <Navbar />
          <HomeMain />
          <Footer />
        </div>
        <LastSection />
      </div>
    );
  }
}

export default Home;
