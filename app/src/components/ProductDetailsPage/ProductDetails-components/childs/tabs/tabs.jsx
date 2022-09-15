import './css/Tabs.css';
import './css/button.css';
import React, { useMemo } from 'react';
import Parser from 'html-react-parser';
import { show } from '../../../common';
import BasicOverView from './childs/basicoverview';
import Specifications from './childs/specifications';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadAccessories,
  loadBasicOverview,
  loadGallery,
  loadSimilarProducts,
  loadSpecifications,
} from '../../../../../actions/actions';

const Tabs = ({ product }) => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { gallery, specifications } = state;

  useMemo(() => {
    dispatch(loadBasicOverview(product.productid));
    dispatch(loadSpecifications(product.productid));
    dispatch(loadGallery(product.productid));
    dispatch(loadSimilarProducts(product.productid));
    dispatch(loadAccessories(product.productid));
  }, [product.productid, dispatch]);

  const viewManuals = (type) => {
    if (
      type === 'Manufacturer-Brochure' ||
      type === 'Additional-pdf1' ||
      type === 'Additional-pdf2' ||
      type === 'Additional-pdf3' ||
      type === 'Additional-pdf4' ||
      type === 'Additional-pdf5' ||
      type === 'Additional-pdf6' ||
      type === 'Additional-pdf7' ||
      type === 'Assembly-Instructions' ||
      type === 'User-Manual'
    ) {
      return displayAdditionalContent(type, product.productid);
    }
    if (type === 'Tour') {
      return displayAdditionalContent(type, product.productid, true);
    }
  };

  const displayAdditionalContent = (type, id, video = false) => {
    const path = video
      ? 'M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM224 384c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V288c0-17.67 14.33-32 32-32h96c17.67 0 32 14.33 32 32V384zM320 284.9v102.3c0 12.57-13.82 20.23-24.48 13.57L256 376v-80l39.52-24.7C306.2 264.6 320 272.3 320 284.9z'
      : 'M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z';
    return (
      <div className="col-md-4">
        <a className="download-link" target="__blank" href={`https://content.etilize.com/${type}/${id}.pdf`} download>
          <div className="pdf-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d={path} />
            </svg>
          </div>
          <p>{type}</p>
        </a>
      </div>
    );
  };

  const checkmanuals = () => {
    let result = false;
    for (let i = 0; i < gallery.productElements.length; i++) {
      if (
        gallery.productElements[i].type === 'Manufacturer-Brochure' ||
        gallery.productElements[i].type === 'Additional-pdf1' ||
        gallery.productElements[i].type === 'Additional-pdf2' ||
        gallery.productElements[i].type === 'Additional-pdf3' ||
        gallery.productElements[i].type === 'Additional-pdf4' ||
        gallery.productElements[i].type === 'Additional-pdf5' ||
        gallery.productElements[i].type === 'Additional-pdf6' ||
        gallery.productElements[i].type === 'Additional-pdf7' ||
        gallery.productElements[i].type === 'Assembly-Instructions' ||
        gallery.productElements[i].type === 'User-Manual' ||
        gallery.productElements[i].type === 'Tour'
      ) {
        result = true;
      }
    }
    return result;
  };

  function isEnhancedOverview() {
    return product.productDescription.some((obj) => obj.type === 4 || obj.type === 5);
  }

  const navigation = (e) => {
    show(`#${e.target.id}-section`, e.target);
  };

  // <section className="c-section-1">
  //   <h1 style={{ fontWeight: 200 }}>{titles[key]}</h1>
  //   <div className="items-container">{displayCompetitions(competitions[key])}</div>
  // </section>;

  return (
    <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
      <ul className="nav nav-tabs" role="tablist" id="tabs">
        {isEnhancedOverview() && (
          <li className="nav-item">
            <button className="nav-link" onClick={navigation} id="enhanced-overview" key={101}>
              Enhanced View
            </button>
          </li>
        )}
        <li className="nav-item">
          <button className="nav-link active" onClick={navigation} id="basic-overview">
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
        {gallery && checkmanuals() === true ? (
          <li className="nav-item">
            <button onClick={navigation} className="nav-link" id="gallery">
              Additional Documents
            </button>
          </li>
        ) : (
          ''
        )}
      </ul>

      <div className="tab-content" id="tab-content">
        {/* Enhanced OverView */}
        {product.productDescription.map((description) =>
          description.type === 5 || description.type === 4 ? (
            <div
              className="tab-pane"
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
        <div className="tab-pane active" id="basic-overview-section">
          <BasicOverView product={product} />
        </div>

        {/* Product Specifications  */}
        <div className="tab-pane" id="specifications-section">
          {specifications && <Specifications product={product} specifications={specifications} />}
        </div>

        {gallery && checkmanuals() === true ? (
          <div className="tab-pane" id="gallery-section">
            <div className="row mb-4">
              <div className="col-md-6 mb-5">
                {/* <div className="row manuals">
                        {gallery.productElements.map((element) => viewManuals(element.type))}
                      </div> */}
                {gallery.productElements.map((element) => viewManuals(element.type))}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Tabs;
