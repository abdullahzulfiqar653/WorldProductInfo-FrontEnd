import { useState } from "react";
import Footer from "../common/Footer";
import React, { useEffect } from "react";
import Navbar from "../common/NavBar/Navbar";
import LargeLoader from "../common/LargeLoader";
import { productLoaded } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import DetailPageContent from "./ProductDetails-components/DetailPageContent";
import { useMemo } from "react";

function ProductDetailPage(props) {
  const productid = props.match.params.productid;
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(productLoaded(productid));
  }, [productid]);
  const state = useSelector((state) => state);
  const product = state.singleProduct;
  return (
    <div className="page-wrapper">
      <Navbar />
      {product ? (
        <DetailPageContent id={productid} product={product} />
      ) : (
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "70vh",
          }}
        >
          <div style={{ width: "100px" }}>
            <LargeLoader />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
