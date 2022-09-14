import { urlList } from './common';
import React, { useState } from 'react';
import Products from './childs/products';
import FiltersList from './childs/FiltersList';
import ProductNav from '../../../common/productnav';
import '../../../ProductDetailsPage/ProductDetails-components/childs/tabs/css/button.css';

function ListDetails() {
  const [filterStatus, setFilterStatus] = useState('page-content mb-10');

  // const openFilters = () => {
  //   setFilterStatus('page-content mb-10 sidebar-active');
  // };

  const closeFilters = () => {
    setFilterStatus('page-content mb-10');
  };

  return (
    <main className="main">
      <div className={filterStatus}>
        <div className="container">
          <div className="shop-content row gutter-lg mb-10">
            <ProductNav linkList={urlList} />
            <FiltersList closeFilters={closeFilters} />
            <Products />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListDetails;
