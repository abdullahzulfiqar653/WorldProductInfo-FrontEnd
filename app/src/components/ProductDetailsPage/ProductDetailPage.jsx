import Footer from "../common/Footer";
import React, { Component } from "react";
import Navbar from "../common/NavBar/Navbar";
import LastSection from "../home/LastSection";
import DetailPageContent from "./ProductDetails-components/DetailPageContent";
import products from "../services/FakeApi/product";
class ProductDetailPage extends Component {
  state = {
    productid: undefined,
    product: {},
    loading: true,
  };
  componentDidMount() {
    const productid = this.props.match.params.productid;
    this.setState({ productid });
    products.results.filter((product) => {
      // console.log(product.productid.toString());
      // console.log(this.props.match.params.productid);
      if (product.productid.toString() == this.props.match.params.productid) {
        this.setState({ product });
      }
    });
    this.setState({ loading: false });
  }
  render() {
    // console.log(this.state.product);
    // console.log(this.state.productid);
    // console.log(this.state.loading);
    return (
      <>
        <div className="page-wrapper">
          <Navbar />
          {this.state.loading === false ? (
            <DetailPageContent
              id={this.state.productid}
              product={this.state.product}
            />
          ) : (
            ""
          )}
          <Footer />
        </div>
        <LastSection />
      </>
    );
  }
}

export default ProductDetailPage;
