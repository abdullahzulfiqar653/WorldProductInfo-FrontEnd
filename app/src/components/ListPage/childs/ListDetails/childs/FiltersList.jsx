import './scroll.css';
import queryString from 'query-string';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoryFilterLoaded,
  productTypeFilterLoaded,
  manufacturerFilterLoaded,
} from '../../../../../actions/actions';

function FiltersList(closeFilters) {
  const [categoryCollapsed, setCategoryCollapsed] = useState(false);
  const [typeCollapsed, setTypeCollapsed] = useState(false);
  const [manufactrerCollapsed, setManufacturerCollapsed] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { categoryid } = queryString.parse(location.search);

  useMemo(() => {
    dispatch(categoryFilterLoaded(categoryid));
    dispatch(productTypeFilterLoaded(categoryid));
    dispatch(manufacturerFilterLoaded(categoryid));
  }, [categoryid, dispatch]);

  // setting the states to the variables to use in the components
  // all of these states are comming from the store
  const category = state.categoryFilter;
  const productType = state.productTypeFilter;
  const manufacturer = state.manufacturerFilter;

  return (
    <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
      <div className="sidebar-overlay" onClick={() => closeFilters}></div>
      <button className="sidebar-close" href="#" onClick={() => closeFilters}>
        <i className="close-icon"></i>
      </button>
      <div className="sidebar-content scrollable scroll">
        <div className="pin-wrapper" style={{ height: '1813.3px' }}>
          <div className="sticky-sidebar" style={{ borderBottom: '0px none rgb(102, 102, 102)', width: '260px' }}>
            {category && category.length > 0 && (
              <div className="widget widget-collapsible">
                <h3
                  className={categoryCollapsed === false ? 'widget-title' : 'widget-title collapsed'}
                  onClick={(e) => {
                    if (categoryCollapsed === false) {
                      setCategoryCollapsed(true);
                    } else {
                      setCategoryCollapsed(false);
                    }
                  }}>
                  <span>{category ? 'Sub Categories' : ''}</span>
                  <span className="toggle-btn"></span>
                </h3>
                <div className="widget-body">
                  <ul className="filter-items search-ul">
                    {category.map((obj) => (
                      <li key={obj.categoryid}>
                        <HashLink to={`/product-list/?categoryid=${obj.categoryid}&flag=category#header`}>
                          {obj.category_label}({obj.category_product_count})
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {productType && productType.length > 0 && (
              <div className="widget widget-collapsible">
                <h3
                  className={typeCollapsed === false ? 'widget-title' : 'widget-title collapsed'}
                  onClick={(e) => {
                    if (typeCollapsed === false) {
                      setTypeCollapsed(true);
                    } else {
                      setTypeCollapsed(false);
                    }
                  }}>
                  <span>Product Type</span>
                  <span className="toggle-btn"></span>
                </h3>
                <div className="widget-body">
                  <ul className="filter-items search-ul">
                    {productType.map((type) => (
                      <li key={type.valueid}>
                        <HashLink
                          to={`/product-list/?categoryid=${categoryid}&flag=producttype&valueid=${type.valueid}#header`}>
                          {type.value} ({type.category_product_count})
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {manufacturer && manufacturer.length > 0 && (
              <div className="widget widget-collapsible">
                <h3
                  className={manufactrerCollapsed === false ? 'widget-title' : 'widget-title collapsed'}
                  onClick={(e) => {
                    if (manufactrerCollapsed === false) {
                      setManufacturerCollapsed(true);
                    } else {
                      setManufacturerCollapsed(false);
                    }
                  }}>
                  <span>Manufacturer Filter</span>
                  <span className="toggle-btn"></span>
                </h3>
                <div className="widget-body">
                  <ul className="filter-items search-ul">
                    {manufacturer.map((obj) => (
                      <li key={obj.manufacturerid}>
                        <HashLink
                          to={`/product-list/?categoryid=${categoryid}&flag=manufacturer&manufacturerid=${obj.manufacturerid}#header`}>
                          {obj.name} ({obj.manufacturer_product_count})
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FiltersList;
