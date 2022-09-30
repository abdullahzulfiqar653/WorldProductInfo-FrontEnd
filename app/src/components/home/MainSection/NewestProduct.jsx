import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import CategoryList from './CategoryList';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LargeLoader from '../../common/LargeLoader';
import { useDispatch, useSelector } from 'react-redux';
import { loadLatestProducts } from '../../../actions/actions';
import '../../ProductDetailsPage/ProductDetails-components/childs/tabs/css/button.css';
import { getFormBody } from '../../../actions/utils';

const MEDIA_URL = process.env.REACT_APP_MEDIA_URL;

function NewestProduct(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((s) => s);
  const values = queryString.parse(location.search);
  const [pageTitle, setPageTitle] = useState('Latest Products');
  const formBody = getFormBody(values);

  let products = {};
  const loading = state.loading;
  products = state.latest;

  useEffect(() => {
    switch (values.flag) {
      case 'search':
        dispatch(loadLatestProducts(formBody));
        setPageTitle('Searched Products');
        break;
      case 'onlyManufacture':
        dispatch(loadLatestProducts(formBody));
        setPageTitle('Manufacture Products');
        break;
      default:
        dispatch(loadLatestProducts());
    }
  }, [values.flag, values.manufacturerid, dispatch]);

  // const openFilters = () => {
  //   setFilterStatus('page-content mb-10 sidebar-active');
  // };

  const getImage = (image) => {
    if (image.substring(0, 8) !== 'https://') {
      return MEDIA_URL + image;
    } else {
      return image;
    }
  };

  return (
    <div className="page-content mb-10">
      <div className="container">
        <div className="shop-content row gutter-lg mb-10">
          <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            <div className="sidebar-overlay"></div>
            <button className="sidebar-close" href="#">
              <i className="close-icon"></i>
            </button>
            <CategoryList />
          </aside>
          <div className="main-content">
            {/* <IntroSection /> */}
            <h2 className="mt-7" style={{ textAlign: 'center' }}>
              {pageTitle}
            </h2>
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
                            <h4 className="product-name" style={{ fontSize: '13px', fontWeight: '700' }}>
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
                            <p style={{ fontWeight: '300' }}>Mfg Number : {product.mfgpartno}</p>
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

export default NewestProduct;
