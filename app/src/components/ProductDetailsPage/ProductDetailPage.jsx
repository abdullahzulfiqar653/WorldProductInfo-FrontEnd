import Footer from "../common/Footer";
import React, { useEffect } from "react";
import Navbar from "../common/NavBar/Navbar";
import LastSection from "../home/LastSection";
import DetailPageContent from "./ProductDetails-components/DetailPageContent";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { productLoaded } from "../../actions/actions";

function ProductDetailPage(props) {
  const [productid, setProductId] = useState(props.match.params.productid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productLoaded(productid));
  }, [productid]);
  const product = useSelector((state) => state.singleProduct);
  console.log(product, productid);
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        {product ? <DetailPageContent id={productid} product={product} /> : ""}
        <Footer />
      </div>
      <LastSection />
    </>
  );
}

export default ProductDetailPage;
