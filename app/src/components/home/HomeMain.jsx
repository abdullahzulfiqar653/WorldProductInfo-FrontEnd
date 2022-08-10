import React, { Component } from "react";
import IntroSection from "./MainSection/IntroSection";
import Preview from "./MainSection/Preview";
import "./MainSection/MainSection.css";
import "../../assets/swiper/swiper-bundle.min.css";
import CategorySection from "./MainSection/CategorySection";
import PopularSection from "./MainSection/PopularSection";

class HomeMain extends Component {
  render() {
    return (
      <div className="main">
        <IntroSection />
        <Preview />
        <CategorySection />
        <PopularSection />
      </div>
    );
  }
}

export default HomeMain;
