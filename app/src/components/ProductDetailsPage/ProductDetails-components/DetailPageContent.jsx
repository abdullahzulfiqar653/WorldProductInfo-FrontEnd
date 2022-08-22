import ProductNav from "./ProductNav";
import React, { Component } from "react";
import ProductDescription from "./ProductDescription";

class DetailPageContent extends Component {
  render() {
    return (
      <div className="main mb-10 pb-1">
        <ProductNav />
        <ProductDescription id={this.props.id} product={this.props.product} />
      </div>
    );
  }
}

export default DetailPageContent;
