import './css/Tabs.css';
import './css/button.css';
import React, { useMemo } from 'react';
import Parser from 'html-react-parser';
import { show, checkmanuals } from '../../../common';
import AdditionalInfo from './childs/additionalinformation';
import BasicOverView from './childs/basicoverview';
import Specifications from './childs/specifications';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadAccessories,
  loadBasicOverview,
  loadSimilarProducts,
  loadSpecifications,
} from '../../../../../actions/actions';

const Tabs = ({ product }) => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { specifications } = state;

  useMemo(() => {
    dispatch(loadBasicOverview(product.productid));
    dispatch(loadSpecifications(product.productid));
    dispatch(loadSimilarProducts(product.productid));
    dispatch(loadAccessories(product.productid));
  }, [product.productid, dispatch]);

  function isEnhancedOverview() {
    return product.productDescription.some((obj) => obj.type === 4 || obj.type === 5);
  }

  const navigation = (e) => {
    show(`#${e.target.id}-section`, e.target);
  };

  return (
    <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
      <ul className="nav nav-tabs" role="tablist" id="tabs">
        {isEnhancedOverview() && (
          <li className="nav-item">
            <button className="nav-link active" onClick={navigation} id="enhanced-overview" key={101}>
              Enhanced View
            </button>
          </li>
        )}
        <li className="nav-item">
          <button
            className={isEnhancedOverview() ? 'nav-link' : 'nav-link active'}
            onClick={navigation}
            id="basic-overview">
            Basic Overview
          </button>
        </li>
        {specifications && specifications.productAttribute.length === 0 ? (
          ''
        ) : (
          <li className="nav-item">
            <button className="nav-link" onClick={navigation} id="specifications">
              Specifications
            </button>
          </li>
        )}
        {checkmanuals(product.productElements) && (
          <li className="nav-item">
            <button onClick={navigation} className="nav-link" id="gallery">
              Additional Documents
            </button>
          </li>
        )}
      </ul>

      <div className="tab-content" id="tab-content">
        {/* Enhanced OverView */}
        {product.productDescription.map((description) =>
          description.type === 5 || description.type === 4 ? (
            <div
              className="tab-pane active"
              id="enhanced-overview-section"
              key={description.type}
              style={{
                height: '1630px',
                display: 'flex',
                justifyContent: 'center',
              }}>
              {Parser(description.description)}
            </div>
          ) : (
            ''
          ),
        )}

        {/* Basic OverView */}
        <div className={isEnhancedOverview() ? 'tab-pane' : 'tab-pane active'} id="basic-overview-section">
          <BasicOverView product={product} />
        </div>

        {/* Product Specifications  */}
        <div className="tab-pane" id="specifications-section">
          {specifications && <Specifications product={product} specifications={specifications} />}
        </div>

        {/* Additional Information */}
        <AdditionalInfo product={product} />
      </div>
    </div>
  );
};

export default Tabs;
