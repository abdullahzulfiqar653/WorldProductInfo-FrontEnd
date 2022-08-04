import HomeMain from "./HomeMain";
import Navbar from "../common/Navbar";
// import "../../assets/css/demo1.min.css";
import React, { Component } from "react";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/fontawesome-free/css/all.min.css";
import "../../assets/vendor/magnific-popup/magnific-popup.min.css";
import "../../assets/vendor/animate/animate.min.css";
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
          <LastSection />
        </div>
      </div>
    );
  }
}

export default Home;
