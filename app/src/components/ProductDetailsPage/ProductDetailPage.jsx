import Footer from "../common/Footer";
import React, { Component } from "react";
import Navbar from "../common/NavBar/Navbar";
import LastSection from "../home/LastSection";
import DetailPageContent from "./ProductDetails-components/DetailPageContent";
class ProductDetailPage extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <Navbar />
          <DetailPageContent />
          <Footer />
        </div>
        <LastSection />
      </>
    );
  }
}

export default ProductDetailPage;
