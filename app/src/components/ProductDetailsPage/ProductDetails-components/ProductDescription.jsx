import './css/Tabs.css';
import './css/button.css';
import { show } from './custome';
import React, { useMemo } from 'react';
import Parser from 'html-react-parser';
import Accessories from './Accessories';
import SimilarProducts from './SimilarProducts';
import LargeLoader from '../../common/LargeLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAccessories,
  loadBasicOverview,
  loadGallery,
  loadSimilarProducts,
  loadSpecifications,
} from '../../../actions/actions';

const ProductDescription = (props) => {
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(loadBasicOverview(props.id));
    dispatch(loadSpecifications(props.id));
    dispatch(loadGallery(props.id));
    dispatch(loadSimilarProducts(props.id));
    dispatch(loadAccessories(props.id));
  }, [props.id, dispatch]);

  const state = useSelector((s) => s);
  const gallery = state.gallery;
  const loading = state.loading;
  const accessories = state.accessories;
  const basicOverview = state.basicOverview;
  const specifications = state.specifications;
  const similarProducts = state.similarProducts;

  const navigation = (e) => {
    show(`#${e.target.id}-section`, e.target);
  };

  const galleryShow = (source, tagname, banner) => {
    const destination = document.getElementById(banner);
    const tag = document.getElementById(banner + '-tag');
    tag.innerHTML = tagname;
    destination.src = source;
  };

  const isPreasentinAttributes = (id) => {
    return specifications.productAttribute.some((obj) => obj.header_id === id);
  };

  const setUniqueHeaders = () => {
    const previousHeaders = specifications.categoryid.categoryHeader;
    const uniqueHeaders = [...new Map(previousHeaders.map((m) => [m.headerid, m])).values()];
    return uniqueHeaders;
  };

  const tabSpecifications = () => {
    const uniqueHeaders = setUniqueHeaders();
    return uniqueHeaders.map(
      (header) =>
        isPreasentinAttributes(header.headerid) && (
          <div key={header.headerid}>
            <h4 style={{ marginBottom: '5px' }}>{header.header_label}</h4>
            <hr
              style={{
                margin: '5px',
              }}
            />
            <tbody>
              {specifications.productAttribute.map((attribute) =>
                header.headerid === attribute.header_id ? (
                  <tr key={attribute.attributeid}>
                    <td
                      style={{
                        padding: '0 15px',
                        width: '200px',
                      }}
                      align="right"
                    >
                      {attribute.atrribute_label}:
                    </td>

                    <td align="left">{Parser(attribute.displayvalue)}</td>
                  </tr>
                ) : (
                  ''
                ),
              )}
            </tbody>
          </div>
        ),
    );
  };

  const viewGallery = (section = null) => (
    <div className="col-md-6 mb-5">
      <div className="banner banner-video product-video br-xs">
        {gallery ? (
          <figure className="banner-media">
            <img
              src={`https://content.etilize.com/Main/${props.product.productid}.jpg`}
              alt="banner"
              id={section ? 'gallery-image' : 'swiper-image'}
              width="610"
              height="300"
            />
            <h3 id={section ? 'gallery-image-tag' : 'swiper-image-tag'} style={{ textAlign: 'center' }}>
              Main
            </h3>
          </figure>
        ) : (
          ''
        )}
      </div>
      <div className="row mb-4 thumb" style={{ overflow: 'auto', flexWrap: 'nowrap' }}>
        {gallery.productElements.map((element) =>
          element.type !== 'Manufacturer-Brochure' &&
          element.type !== 'Additional-pdf1' &&
          element.type !== 'Additional-pdf2' &&
          element.type !== 'Additional-pdf3' &&
          element.type !== 'Additional-pdf4' &&
          element.type !== 'Additional-pdf5' &&
          element.type !== 'Additional-pdf6' &&
          element.type !== 'Additional-pdf7' &&
          element.type !== 'Assembly-Instructions' &&
          element.type !== '360-main-view' &&
          element.type !== '220-Canvas' &&
          element.type !== 'Tour' &&
          // element.type !== "Original" &&
          element.type !== 'User-Manual' ? (
            <div className="col-md-2" key={element.productelementid}>
              <img
                src={`https://content.etilize.com/${element.type}/${props.product.productid}.jpg`}
                alt={element.type}
                onClick={(e) => galleryShow(e.target.src, e.target.alt, section ? 'gallery-image' : 'swiper-image')}
              />
            </div>
          ) : (
            ''
          ),
        )}
      </div>
    </div>
  );

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
      return (
        <div className="col-md-4">
          <a
            className="download-link"
            target="__blank"
            href={`https://content.etilize.com/${type}/${props.product.productid}.pdf`}
            download
          >
            <div className="pdf-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z" />
              </svg>
            </div>
            <p>{type}</p>
          </a>
        </div>
      );
    } else if (type === 'Tour') {
      <div className="col-md-4">
        <a
          className="download-link"
          target="__blank"
          href={`https://content.etilize.com/Tour/${props.product.productid}/`}
          download
        >
          <div className="pdf-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM224 384c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V288c0-17.67 14.33-32 32-32h96c17.67 0 32 14.33 32 32V384zM320 284.9v102.3c0 12.57-13.82 20.23-24.48 13.57L256 376v-80l39.52-24.7C306.2 264.6 320 272.3 320 284.9z" />
            </svg>
          </div>
          <p>{type}</p>
        </a>
      </div>;
    }
  };
  return (
    <div className="page-content">
      <div className="container">
        <div className="main-content">
          {!loading ? (
            <div className="product product-single row">
              {gallery && viewGallery()}
              <div className="col-md-6 mb-4 mb-md-6">
                <div className="product-details" data-sticky-options="{'minWidth': 767}">
                  {props.product !== undefined
                    ? props.product.productDescription.map((title) =>
                        title.type === 2 ? (
                          <h1 key={title.type} className="product-title">
                            {title.description}
                          </h1>
                        ) : (
                          ''
                        ),
                      )
                    : ''}
                  <div className="product-bm-wrapper">
                    <div className="product-meta">
                      <div className="product-sku">
                        SKUS :
                        {props.product !== undefined
                          ? props.product.productSkus.map((sku) => (
                              <span
                                style={{ padding: '0 3px' }}
                                key={props.product.productSkus.map((s) =>
                                  s.name !== sku.name && s.sku === sku.sku ? sku.name : sku.sku,
                                )}
                              >
                                {sku.name} : {sku.sku}
                              </span>
                            ))
                          : ''}
                      </div>
                    </div>
                  </div>

                  <hr className="product-divider" />

                  <div className="product-short-desc">
                    <ul className="list-type-check list-style-none">
                      {props.product !== undefined
                        ? props.product.productDescription.map((description) =>
                            description.type !== 2 && description.type !== 5 && description.type !== 6 ? (
                              <li key={`${description.type}20000`}>{description.description}</li>
                            ) : (
                              ''
                            ),
                          )
                        : ''}
                    </ul>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: '0%' }}></span>
                    </div>
                  </div>
                  <hr className="product-divider" />
                  <div className="product-variation-price">
                    <span></span>
                  </div>

                  <div className="fix-bottom product-sticky-content sticky-content">
                    <div className="product-form container">
                      <div className="product-qty-form">
                        <div className="input-group">
                          <input
                            className="quantity form-control"
                            type="number"
                            min="1"
                            max="10000000"
                            // value={1}
                            placeholder="Quantity"
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary btn-cart">
                        <i className="w-icon-cart"></i>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '70vh',
              }}
            >
              <div style={{ width: '100px' }}>
                <LargeLoader />
              </div>
            </div>
          )}
          <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
            <ul className="nav nav-tabs" role="tablist" id="tabs">
              {props.product &&
                props.product.productDescription.map((description) =>
                  description.type === 5 || description.type === 6 ? (
                    <li className="nav-item">
                      <button className="nav-link" onClick={navigation} id="enhanced-overview" key={101}>
                        Enhanced View
                      </button>
                    </li>
                  ) : (
                    ''
                  ),
                )}
              <li className="nav-item">
                <button className="nav-link" onClick={navigation} id="basic-overview">
                  Basic Overview
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={navigation} id="specifications">
                  Specifications
                </button>
              </li>
              <li className="nav-item">
                <button onClick={navigation} className="nav-link" id="gallery">
                  Gallery
                </button>
              </li>
            </ul>
            <div className="tab-content" id="tab-content">
              {props.product &&
                props.product.productDescription.map((description) =>
                  description.type === 5 || description.type === 6 ? (
                    <div
                      className="tab-pane"
                      id="enhanced-overview-section"
                      key={description.type}
                      style={{
                        height: '1630px',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {Parser(description.description)}
                    </div>
                  ) : (
                    ''
                  ),
                )}
              <div className="tab-pane" id="basic-overview-section">
                <h4>Main Features</h4>
                <ol style={{ listStyleType: 'square' }}>
                  {basicOverview
                    ? basicOverview.productAttribute.map((basic) =>
                        basic.atrribute_label !== 'Manufacturer Website Address' &&
                        basic.atrribute_label !== 'Certifications & Standards' &&
                        basic.atrribute_label !== 'Marketing Information' &&
                        basic.atrribute_label !== 'Product Type' &&
                        basic.atrribute_label !== 'Manufacturer Part Number' &&
                        basic.atrribute_label !== 'Manufacturer' &&
                        basic.atrribute_label !== 'Product Name' &&
                        basic.atrribute_label !== 'Brand Name' &&
                        basic.atrribute_label !== 'Minimum Operating Temperature' &&
                        basic.atrribute_label !== 'Maximum Operating Temperature' &&
                        basic.atrribute_label !== 'Package Contents' ? (
                          <li key={basic.atrribute_label + basic.displayvalue + props.id}>
                            {basic.atrribute_label}: {Parser(basic.displayvalue)}
                          </li>
                        ) : (
                          ''
                        ),
                      )
                    : ''}
                </ol>
                <hr style={{ background: 'rgb(80 79 79)' }} />
                {basicOverview
                  ? basicOverview.productAttribute.map((basic) =>
                      basic.atrribute_label === 'Marketing Information' ? (
                        <>
                          <h4 key={basic.atrribute_label}>{basic.atrribute_label}</h4>
                          <div key={basic.atrributeid}>{Parser(basic.displayvalue)}</div>
                        </>
                      ) : (
                        ''
                      ),
                    )
                  : ''}
                <hr style={{ background: 'rgb(80 79 79)' }} />
                {basicOverview
                  ? basicOverview.productAttribute.map((basic) =>
                      basic.atrribute_label === 'Package Contents' ? (
                        <>
                          <h4 key={basic.atrribute_label}>{basic.atrribute_label}</h4>
                          <div key={basic.atrributeid}>{Parser(basic.displayvalue)}</div>
                        </>
                      ) : (
                        ''
                      ),
                    )
                  : ''}
              </div>
              <div className="tab-pane" id="specifications-section">
                {specifications && tabSpecifications()}
              </div>
              <div className="tab-pane" id="gallery-section">
                <div className="row mb-4">
                  <div className="col-md-6 mb-5">
                    <h4 className="title tab-pane-title font-weight-bold mb-2">Gallery</h4>
                    <div className="row manuals">
                      {gallery && gallery.productElements.map((element) => viewManuals(element.type))}
                    </div>
                  </div>
                  {gallery && viewGallery('gallery')}
                </div>
              </div>
            </div>
            {similarProducts && similarProducts.count !== 0 && <SimilarProducts products={similarProducts.results} />}
            {accessories && accessories.count !== 0 && <Accessories products={accessories.results} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
