import Tabs from './childs/tabs/tabs';
import React, { useMemo } from 'react';
import Accessories from './Accessories';
import SimilarProducts from './SimilarProducts';
import ProductMainDetail from './childs/productMainDetail/productMainDetail';
import { useDispatch, useSelector } from 'react-redux';
import { loadAccessories, loadSimilarProducts } from '../../../actions/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(loadSimilarProducts(product.productid));
    dispatch(loadAccessories(product.productid));
  }, [product.productid, dispatch]);

  const state = useSelector((s) => s);
  const accessories = state.accessories;
  const similarProducts = state.similarProducts;

  return (
    <div className="page-content">
      <div className="container">
        <div className="main-content">
          <ProductMainDetail product={product} />
          <Tabs product={product} />
          {similarProducts && similarProducts.count > 0 && <SimilarProducts products={similarProducts.results} />}
          {accessories && accessories.count > 0 && <Accessories products={accessories.results} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
