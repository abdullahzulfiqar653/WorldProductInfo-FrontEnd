import React, { Component } from "react";
import Navbar from "../common/NavBar/Navbar";
import LastSection from "../home/LastSection";

class Details extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <Navbar />
        </div>
        <LastSection />
      </>
    );
  }
}

export default Details;
