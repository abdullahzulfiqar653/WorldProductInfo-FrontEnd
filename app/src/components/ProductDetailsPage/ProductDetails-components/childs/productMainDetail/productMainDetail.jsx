import React from 'react';
import Gallery from './childs/gallery';
import ProductDescription from './childs/productDescription';

const ProductMainDetail = ({ product }) => {
  return (
    <div className="product product-single row">
      <Gallery product={product} />
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductMainDetail;
