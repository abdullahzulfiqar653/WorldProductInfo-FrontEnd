import queryString from 'query-string';
import FiltersList from './FiltersList';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React, { useState, useMemo } from 'react';
import LargeLoader from '../../common/LargeLoader';
import { getFormBody } from '../../../actions/utils';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductList } from '../../../actions/actions';
import '../../ProductDetailsPage/ProductDetails-components/css/button.css';
import { MEDIA_URL } from '../../../constant/constantURL';

function MainListPage(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  let products = {};
  const loading = state.loading;
  products = state.products;

  const values = queryString.parse(location.search);
  const formBody = getFormBody(values);
  const [Limit, setLimit] = useState(12);
  const [offSet, setOffSet] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('page-content mb-10');

  useMemo(() => {
    dispatch(loadProductList(Limit, offSet, formBody));
  }, [Limit, offSet, dispatch, formBody]);

  // const openFilters = () => {
  //   setFilterStatus('page-content mb-10 sidebar-active');
  // };

  const closeFilters = () => {
    setFilterStatus('page-content mb-10');
  };

  const handelChange = (e) => {
    setLimit(e.target.value);
    setOffSet(0);
    setCurrentPage(1);
  };

  const pageNext = () => {
    setOffSet(Number(offSet) + Number(Limit));
    setCurrentPage(currentPage + 1);
  };

  const pagePrevious = () => {
    setOffSet(Number(offSet) - Number(Limit));
    setCurrentPage(currentPage - 1);
  };
  const getImage = (image) => {
    if (image.substring(0, 8) !== 'https://') {
      return MEDIA_URL + image;
    } else {
      return image;
    }
  };
  return (
    <div className={filterStatus}>
      <div className="container">
        <div className="shop-content row gutter-lg mb-10">
          <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            <div className="sidebar-overlay" onClick={closeFilters}></div>
            <button className="sidebar-close" href="#" onClick={closeFilters}>
              <i className="close-icon"></i>
            </button>
            <FiltersList />
          </aside>

          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                {/* <button
                  onClick={openFilters}
                  href="#"
                  className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle
                                   btn-icon-left">
                  <i className="w-icon-category"></i>
                  <span>Filters</span>
                </button> */}
              </div>
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                  <label>Results Per Page :</label>
                  <select name="count" className="form-control" onChange={handelChange}>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                    <option value="42">42</option>
                    <option value="51">51</option>
                  </select>
                </div>
              </div>
            </nav>
            {!loading && products ? (
              <React.Fragment>
                {products.count !== 0 ? (
                  <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                    {products.results.map((product) => (
                      <div className="product-wrap" key={product.productid}>
                        <div className="product text-center">
                          <figure className="product-media">
                            <HashLink to={`/product/${product.productid}#header`}>
                              <img src={getImage(product.image_url)} alt="Product" width="330" height="338" />
                            </HashLink>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name" style={{ fontSize: '13px' }}>
                              {/* <HashLink to={`/product/${product.productid}#header`}>
                                {product.product_description}
                              </HashLink> */}
                              {product.productDescription.map((description) =>
                                description.type === 2 ? (
                                  <HashLink to={`/product/${product.productid}#header`} key={'alpha'}>
                                    {description.description}
                                  </HashLink>
                                ) : (
                                  ''
                                ),
                              )}
                            </h4>
                            {/* {product.productDescription.map((description) =>
                              description.type === 3 ? (
                                <div
                                  className="product-desc"
                                  style={{ margin: '0', color: 'black' }}
                                  key={description.type + product.productid}>
                                  {description.description}
                                </div>
                              ) : (
                                ''
                              )
                            )}
                            <div className="product-desc" style={{ margin: '0', color: 'gray' }}>
                              SKUS :
                              {product.productSkus.map((Sku) => (
                                <span style={{ paddingRight: '5px' }} key={product.productid + Sku.sku + Sku.name}>
                                  {Sku.name} : {Sku.sku}
                                </span>
                              ))}
                            </div> */}
                            <p>Mfg Number : {product.mfgpartno}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="row">
                    <h1 style={{ textAlign: 'center' }}>There are no products.</h1>
                  </div>
                )}
                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing
                    <span>
                      {products && Limit > products.count ? products.count : Limit} of {products ? products.count : ''}
                    </span>
                    Products
                  </p>
                  <ul className="pagination">
                    <li className="prev">
                      <button
                        aria-label="Previous"
                        onClick={pagePrevious}
                        disabled={products && products.previous === null ? true : false}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '0',
                        }}>
                        <i className="fas fa-arrow-left"></i>Prev
                      </button>
                    </li>
                    <li>
                      {currentPage} / {Math.ceil(products ? products.count / Limit : 1)}
                    </li>
                    <li className="next">
                      <button
                        href="#"
                        aria-label="Next"
                        onClick={pageNext}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '0',
                        }}
                        disabled={products && products.next === null ? true : false}>
                        Next<i className="fas fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </React.Fragment>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainListPage;
