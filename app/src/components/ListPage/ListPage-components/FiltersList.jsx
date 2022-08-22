import React, { useEffect } from 'react';

import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { categoryFilterLoaded, productTypeFilterLoaded, manufacturerFilterLoaded } from '../../../actions/actions';
function FiltersList(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { categoryid } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(categoryFilterLoaded(categoryid));
    dispatch(productTypeFilterLoaded(categoryid));
    dispatch(manufacturerFilterLoaded(categoryid));
  }, [categoryid]);

  // setting the states to the variables to use in the components
  // all of these states are comming from the store
  const category = state.categoryFilter;
  const productType = state.productTypeFilter;
  const manufacturer = state.manufacturerFilter;
  console.log(manufacturer && manufacturer);

  return (
    <div className="sidebar-content scrollable">
      {category && category.length > 0 && (
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>{category ? 'Categories Filter' : ''}</span>
          </h3>
          <ul className="widget-body filter-items search-ul">
            {category.map((obj) => (
              <li key={obj.categoryid}>
                <HashLink to={`/product-list/?categoryid=${obj.categoryid}&flag=category#header`}>
                  {obj.category_label}({obj.category_product_count})
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {productType && productType.length > 0 && (
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>Product Type</span>
          </h3>
          <div className="widget-body">
            <ul className="filter-items search-ul">
              {productType.map((productType) => (
                <li key={productType.valueid}>
                  <HashLink
                    to={`/product-list/?categoryid=${categoryid}&flag=producttype&valueid=${productType.valueid}#header`}
                  >
                    {productType.value} ({productType.category_product_count})
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {manufacturer && manufacturer.length > 0 && (
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>Manufacturer Filter</span>
          </h3>
          <ul className="widget-body filter-items search-ul">
            {manufacturer.map((obj) => (
              <li key={obj.manufacturerid}>
                <HashLink
                  to={`/product-list/?categoryid=${categoryid}&flag=manufacturer&manufacturerid=${obj.manufacturerid}#header`}
                >
                  {obj.name} ({obj.manufacturer_product_count})
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FiltersList;
