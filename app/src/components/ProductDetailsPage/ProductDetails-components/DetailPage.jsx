import { urlList } from './custome';
import React from 'react';
import ProductNav from '../../common/productnav';
import ProductDescription from './ProductDescription';

const DetailPage = ({ id, product }) => {
  return (
    <div className="main mb-10 pb-1">
      <ProductNav linkList={urlList} />
      <ProductDescription id={id} product={product} />
    </div>
  );
};

export default DetailPage;
