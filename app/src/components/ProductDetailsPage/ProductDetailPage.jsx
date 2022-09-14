import Footer from '../common/Footer';
import React, { useMemo } from 'react';
import Navbar from '../common/NavBar/Navbar';
import LargeLoader from '../common/LargeLoader';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductDetail } from '../../actions/actions';
import DetailPage from './ProductDetails-components/DetailPage';

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
      {product ? (
        <DetailPage id={productid} product={product} />
      ) : (
        <div
          className="row"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '70vh',
          }}>
          <div style={{ width: '100px' }}>
            <LargeLoader />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
