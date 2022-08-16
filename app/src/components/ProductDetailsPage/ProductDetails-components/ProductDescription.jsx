import "./css/button.css";
import "./css/Tabs.css";
import { show } from "./custome";
import Parser from "html-react-parser";
import React, { Component } from "react";
import SimilarProducts from "./SimilarProducts";
import RelatedProducts from "./RelatedProducts";
import ProductImageGallery from "./ProductImageGallery";
import basicOverview from "../../services/FakeApi/basicoverview";
import ProductsList from "../../ListPage/ListPage-components/ProductsList";
import accessories from "../../services/FakeApi/accessories";
import similarProducts from "../../services/FakeApi/similar";
import relatedProducts from "../../services/FakeApi/related";

class ProductDescription extends Component {
  state = {
    product: undefined,
    basicOverview: undefined,
    accessories: undefined,
  };
  componentDidMount() {
    show("#basic-overview-section", document.getElementById("basic-overview"));
    // console.log(this.props);
    this.setState({ product: this.props.product });
    this.setState({ basicOverview: basicOverview.productAttribute });
    this.setState({ accessories: accessories.results });
  }
  navigation = (e) => {
    show(`#${e.target.id}-section`, e.target);
  };
  galleryShow = (e) => {
    const src = e.target.src;
    let destination = document.getElementById("gallery-image");
    // console.log(src, destination);
    destination.src = src;
    // console.log(src, destination);
  };
  render() {
    const { product, basicOverview, accessories } = this.state;
    // console.log(accessories);
    return (
      <div className="page-content">
        <div className="container">
          <div className="main-content">
            <div className="product product-single row">
              <div className="col-md-6 mb-6">
                {product !== undefined ? (
                  <ProductImageGallery
                    elements={product.productElements}
                    id={product.productid}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mb-4 mb-md-6">
                <div
                  className="product-details"
                  data-sticky-options="{'minWidth': 767}"
                >
                  {product !== undefined
                    ? product.productDescription.map((title) =>
                        title.type === 2 ? (
                          <h1 key={title.type} className="product-title">
                            {title.description}
                          </h1>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                  <div className="product-bm-wrapper">
                    <div className="product-meta">
                      <div className="product-sku">
                        SKUS :
                        {product !== undefined
                          ? product.productSkus.map((sku) => (
                              <span
                                style={{ padding: "0 3px" }}
                                key={product.productSkus.map((s) =>
                                  s.name !== sku.name && s.sku === sku.sku
                                    ? sku.name
                                    : sku.sku
                                )}
                              >
                                {sku.name} : {sku.sku}
                              </span>
                            ))
                          : ""}
                      </div>
                    </div>
                  </div>

                  <hr className="product-divider" />

                  <div className="product-short-desc">
                    <ul className="list-type-check list-style-none">
                      {product !== undefined
                        ? product.productDescription.map((description) =>
                            description.type !== 2 &&
                            description.type !== 5 &&
                            description.type !== 6 ? (
                              <li key={`${description.type}20000`}>
                                {description.description}
                              </li>
                            ) : (
                              // console.log(`${description.type}20000`)
                              ""
                            )
                          )
                        : ""}
                    </ul>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "0%" }}></span>
                    </div>
                  </div>

                  <hr className="product-divider" />

                  {/* <div className="product-form product-variation-form product-color-swatch">
                    <label>Color:</label>
                    <div className="d-flex align-items-center product-variations">
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: " #ffcc01" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#ca6d00" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#1c93cb" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#ccc" }}
                      ></a>
                      <a
                        href="#"
                        className="color"
                        style={{ backgroundColor: "#333" }}
                      ></a>
                    </div>
                  </div>
                  <div className="product-form product-variation-form product-size-swatch">
                    <label className="mb-1">Size:</label>
                    <div className="flex-wrap d-flex align-items-center product-variations">
                      <a href="#" className="size">
                        Small
                      </a>
                      <a href="#" className="size">
                        Medium
                      </a>
                      <a href="#" className="size">
                        Large
                      </a>
                      <a href="#" className="size">
                        Extra Large
                      </a>
                    </div>
                    <a href="#" className="product-variation-clean">
                      Clean All
                    </a>
                  </div> */}

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
                          {/* <button className="quantity-plus w-icon-plus"></button>
                          <button className="quantity-minus w-icon-minus"></button> */}
                        </div>
                      </div>
                      <button className="btn btn-primary btn-cart">
                        <i className="w-icon-cart"></i>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>

                  {/* <div className="social-links-wrapper">
                    <div className="social-links">
                      <div className="social-icons social-no-color border-thin">
                        <a
                          href="#"
                          className="social-icon social-facebook w-icon-facebook"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-twitter w-icon-twitter"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-pinterest fab fa-pinterest-p"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-whatsapp fab fa-whatsapp"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-youtube fab fa-linkedin-in"
                        ></a>
                      </div>
                    </div>
                    <span className="divider d-xs-show"></span>
                    <div className="product-link-wrapper d-flex">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist w-icon-heart"
                      >
                        <span></span>
                      </a>
                      <a
                        href="#"
                        className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                      >
                        <span></span>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
              <ul className="nav nav-tabs" role="tablist" id="tabs">
                {product !== undefined
                  ? product.productDescription.map((description) =>
                      description.type === 5 ? (
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            onClick={this.navigation}
                            id="enhanced-overview"
                            key={101}
                          >
                            Enhanced View
                          </button>
                        </li>
                      ) : description.type === 6 ? (
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            onClick={this.navigation}
                            id="enhanced-manufacturer-overview"
                            key={102}
                          >
                            Enhanced View Manufacturer
                          </button>
                        </li>
                      ) : (
                        ""
                      )
                    )
                  : ""}
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="basic-overview"
                  >
                    Basic Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="specifications"
                  >
                    Specifications
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.navigation}
                    className="nav-link"
                    id="gallery"
                  >
                    Gallery
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={this.navigation}
                    id="accessories"
                  >
                    Options & Accessories
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="tab-content">
                {product !== undefined
                  ? product.productDescription.map((description) =>
                      description.type === 5 ? (
                        <div
                          className="tab-pane"
                          id="enhanced-overview-section"
                          key={description.type}
                        >
                          {Parser(description.description)}
                        </div>
                      ) : description.type === 6 ? (
                        <div
                          className="tab-pane"
                          id="enhanced-manufacturer-overview-section"
                          key={description.type}
                        >
                          {Parser(description.description)}
                        </div>
                      ) : (
                        ""
                      )
                    )
                  : ""}
                <div className="tab-pane" id="basic-overview-section">
                  <h4>Main Features</h4>
                  <ol style={{ listStyleType: "square" }}>
                    {basicOverview
                      ? basicOverview.map((basic) =>
                          basic.atrribute_label !==
                            "Manufacturer Website Address" &&
                          basic.atrribute_label !==
                            "Certifications & Standards" &&
                          basic.atrribute_label !== "Marketing Information" &&
                          basic.atrribute_label !== "Product Type" &&
                          basic.atrribute_label !==
                            "Manufacturer Part Number" &&
                          basic.atrribute_label !== "Manufacturer" &&
                          basic.atrribute_label !== "Product Name" &&
                          basic.atrribute_label !== "Brand Name" &&
                          basic.atrribute_label !==
                            "Minimum Operating Temperature" &&
                          basic.atrribute_label !==
                            "Maximum Operating Temperature" &&
                          basic.atrribute_label !== "Package Contents" ? (
                            <li key={basic.atrribute_label}>
                              {basic.atrribute_label}: {basic.displayvalue}
                            </li>
                          ) : (
                            ""
                          )
                        )
                      : ""}
                  </ol>
                  <hr style={{ background: "rgb(80 79 79)" }} />
                  {basicOverview
                    ? basicOverview.map((basic) =>
                        basic.atrribute_label === "Marketing Information" ? (
                          <>
                            <h4 key={basic.atrribute_label}>
                              {basic.atrribute_label}
                            </h4>
                            <div key={basic.atrributeid}>
                              {Parser(basic.displayvalue)}
                            </div>
                          </>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                  <hr style={{ background: "rgb(80 79 79)" }} />
                  {basicOverview
                    ? basicOverview.map((basic) =>
                        basic.atrribute_label === "Package Contents" ? (
                          <>
                            <h4 key={basic.atrribute_label}>
                              {basic.atrribute_label}
                            </h4>
                            <div key={basic.atrributeid}>
                              {Parser(basic.displayvalue)}
                            </div>
                          </>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
                <div className="tab-pane" id="specifications-section">
                  <h4 style={{ marginBottom: "5px" }}>General Information</h4>
                  <hr style={{ background: "rgb(80 79 79)", margin: "5px" }} />
                  <table>
                    <tbody>
                      {basicOverview
                        ? basicOverview.map((basic) =>
                            basic.atrribute_label === "Manufacturer" ||
                            basic.atrribute_label ===
                              "Manufacturer Part Number" ||
                            basic.atrribute_label === "Brand Name" ||
                            basic.atrribute_label === "Product Name" ||
                            basic.atrribute_label === "Product Type" ? (
                              <tr key={basic.attributeid}>
                                <td
                                  style={{ padding: "0 15px", width: "200px" }}
                                  align="right"
                                >
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">{basic.displayvalue}</td>
                              </tr>
                            ) : basic.atrribute_label ===
                              "Marketing Information" ? (
                              <tr>
                                <td style={{ padding: "0 15px" }} align="right">
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">
                                  {Parser(basic.displayvalue)}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )
                          )
                        : ""}
                    </tbody>
                  </table>
                  <h4 style={{ marginBottom: "5px" }}>Technical Information</h4>
                  <hr style={{ background: "rgb(80 79 79)", margin: "5px" }} />
                  <table>
                    <tbody>
                      {basicOverview
                        ? basicOverview.map((basic) =>
                            basic.atrribute_label === "Print/Message" ? (
                              <tr>
                                <td
                                  style={{ padding: "0 15px", width: "200px" }}
                                  align="right"
                                >
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">{basic.displayvalue}</td>
                              </tr>
                            ) : (
                              ""
                            )
                          )
                        : ""}
                    </tbody>
                  </table>
                  <h4 style={{ marginBottom: "5px" }}>
                    Environmental Conditions
                  </h4>
                  <hr style={{ background: "rgb(80 79 79)", margin: "5px" }} />
                  <table>
                    <tbody>
                      {basicOverview
                        ? basicOverview.map((basic) =>
                            basic.atrribute_label ===
                              "Minimum Operating Temperature" ||
                            basic.atrribute_label ===
                              "Maximum Operating Temperature" ? (
                              <tr>
                                <td
                                  style={{ padding: "0 15px", width: "200px" }}
                                  align="right"
                                >
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">
                                  <span>{Parser(basic.displayvalue)}</span>
                                </td>
                              </tr>
                            ) : (
                              ""
                            )
                          )
                        : ""}
                    </tbody>
                  </table>
                  <h4 style={{ marginBottom: "5px" }}>
                    Physical Characteristics
                  </h4>
                  <hr style={{ background: "rgb(80 79 79)", margin: "5px" }} />
                  <table>
                    <tbody>
                      {basicOverview
                        ? basicOverview.map((basic) =>
                            basic.atrribute_label === "Product Color" ||
                            basic.atrribute_label === "Height" ||
                            basic.atrribute_label === "Width" ||
                            basic.atrribute_label === "Depth" ||
                            basic.atrribute_label === "Weight (Approximate)" ? (
                              <tr>
                                <td
                                  style={{ padding: "0 15px", width: "200px" }}
                                  align="right"
                                >
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">
                                  <span>{basic.displayvalue}</span>
                                </td>
                              </tr>
                            ) : (
                              ""
                            )
                          )
                        : ""}
                    </tbody>
                  </table>
                  <h4 style={{ marginBottom: "5px" }}>Miscellaneous</h4>
                  <hr style={{ background: "rgb(80 79 79)", margin: "5px" }} />
                  <table>
                    <tbody>
                      {basicOverview
                        ? basicOverview.map((basic) =>
                            basic.atrribute_label === "Package Contents" ||
                            basic.atrribute_label ===
                              "Certifications & Standards" ? (
                              <tr>
                                <td
                                  style={{ padding: "0 15px", width: "200px" }}
                                  align="right"
                                >
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">
                                  {Parser(basic.displayvalue)}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )
                          )
                        : ""}
                    </tbody>
                  </table>
                  <h4 style={{ marginBottom: "5px" }}>Warranty</h4>
                  <hr style={{ background: "rgb(80 79 79)", margin: "5px" }} />
                  <table>
                    <tbody>
                      {basicOverview
                        ? basicOverview.map((basic) =>
                            basic.atrribute_label === "Limited Warranty" ? (
                              <tr>
                                <td
                                  style={{ padding: "0 15px", width: "200px" }}
                                  align="right"
                                >
                                  {basic.atrribute_label}:
                                </td>
                                <td align="left">{basic.displayvalue}</td>
                              </tr>
                            ) : (
                              ""
                            )
                          )
                        : ""}
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="gallery-section">
                  <div className="row mb-4">
                    <div className="col-md-6 mb-5">
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Gallery
                      </h4>
                      <div className="row manuals">
                        {product
                          ? product.productElements.map((element) =>
                              element.type === "Manufacturer-Brochure" ||
                              // element.type !== "Original" &&
                              element.type === "User-Manual" ? (
                                <div className="col-md-4">
                                  <a
                                    className="download-link"
                                    target="__blank"
                                    href={`https://content.etilize.com/${element.type}/${product.productid}.pdf`}
                                    download
                                  >
                                    <div className="pdf-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                      >
                                        <path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z" />
                                      </svg>
                                    </div>
                                    <p>{element.type}</p>
                                  </a>
                                </div>
                              ) : (
                                ""
                              )
                            )
                          : ""}
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="banner banner-video product-video br-xs">
                        {product ? (
                          <figure className="banner-media">
                            <img
                              src={`https://content.etilize.com/Main/${product.productid}.jpg`}
                              alt="banner"
                              id="gallery-image"
                              width="610"
                              height="300"
                              // style=background-color: #bebebe;
                            />
                          </figure>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="row mb-4 thumb">
                        {product
                          ? product.productElements.map((element) =>
                              element.type !== "Manufacturer-Brochure" &&
                              // element.type !== "Original" &&
                              element.type !== "User-Manual" ? (
                                <div
                                  className="col-md-2"
                                  key={`${element.type}1`}
                                >
                                  <img
                                    src={`https://content.etilize.com/${element.type}/${product.productid}.jpg`}
                                    alt=""
                                    onClick={this.galleryShow}
                                  />
                                </div>
                              ) : (
                                ""
                              )
                            )
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="accessories-section">
                  {accessories ? <ProductsList products={accessories} /> : ""}
                </div>
              </div>
              {similarProducts.count !== 0 ? (
                <SimilarProducts products={similarProducts.results} />
              ) : (
                ""
              )}
              {similarProducts.count !== 0 ? (
                <RelatedProducts products={similarProducts.results} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
