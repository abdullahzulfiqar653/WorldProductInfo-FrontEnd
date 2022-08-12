import "./MainSection/MainSection.css";
import React, { Component } from "react";
import "../../assets/swiper/swiper-bundle.min.css";
import IntroSection from "./MainSection/IntroSection";

class HomeMain extends Component {
  render() {
    return (
      <div className="main">
        <IntroSection />
      </div>
    );
  }
}

export default HomeMain;
