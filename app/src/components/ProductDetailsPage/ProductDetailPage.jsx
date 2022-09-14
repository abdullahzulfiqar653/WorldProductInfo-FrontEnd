import Footer from '../common/Footer';
import React, { useMemo } from 'react';
import Navbar from '../common/NavBar/Navbar';
import Loading from './ProductDetails-components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductDetail } from '../../actions/actions';
import ProductNav from '../common/productnav';
import Product from './ProductDetails-components/Product';
import { urlList } from './common';

function ProductDetailPage(props) {
  const productid = props.match.params.productid;
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(loadProductDetail(productid));
  }, [productid, dispatch]);

  const state = useSelector((s) => s);
  const product = state.singleProduct;
  return (
    <div className="page-wrapper">
      <Navbar />
      <ProductNav linkList={urlList} />
      {product && <Product product={product} />}
      {!product && <Loading product={product} />}
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
