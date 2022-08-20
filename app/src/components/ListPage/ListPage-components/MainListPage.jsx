import { useState } from "react";
import FiltersList from "./FiltersList";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import LargeLoader from "../../common/LargeLoader";
import { useDispatch, useSelector } from "react-redux";
import { loadProductList } from "../../../actions/actions";
import "../../ProductDetailsPage/ProductDetails-components/css/button.css";

function MainListPage(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const loading = state.loading;
  const products = state.products;
  const [Limit, setLimit] = useState(10);
  const [offSet, setOffSet] = useState(0);
  const [pageList, setPageList] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("page-content mb-10");

  useEffect(() => {
    dispatch(loadProductList(props.id.categoryid, Limit, offSet));
    paginate();
  }, [props.id, Limit, offSet]);

  const openFilters = () => {
    setFilterStatus("page-content mb-10 sidebar-active");
  };

  const closeFilters = () => {
    setFilterStatus("page-content mb-10");
  };

  const handelChange = (e) => {
    setLimit(e.target.value);
    setOffSet(0);
    setCurrentPage(1);
  };

  const pageNext = () => {
    setOffSet(parseInt(offSet) + parseInt(Limit));
    setCurrentPage(currentPage + 1);
  };

  const pagePrevious = () => {
    setOffSet(parseInt(offSet) - parseInt(Limit));
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={filterStatus}>
      <div className="container-fluid">
        <div className="shop-content">
          <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay" onClick={closeFilters}></div>
            <a className="sidebar-close" href="#" onClick={closeFilters}>
              <i className="close-icon"></i>
            </a>
            <FiltersList categoryId={props.id.categoryid} />
          </aside>
          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                <button
                  onClick={openFilters}
                  href="#"
                  className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                   btn-icon-left"
                >
                  <i className="w-icon-category"></i>
                  <span>Filters</span>
                </button>
              </div>
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                  <label>Results Per Page :</label>
                  <select
                    name="count"
                    className="form-control"
                    onChange={handelChange}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </nav>
            {loading === false ? (
              <div>
                {products ? (
                  <div className="product-wrapper row cols-xl-2 cols-sm-1 cols-xs-2 cols-1">
                    {products.results.map((product) => (
                      <div
                        className="product product-list product-select"
                        key={product.productid}
                      >
                        <figure className="product-media">
                          <HashLink to={`/product/${product.productid}#header`}>
                            <img
                              src={`https://content.etilize.com/images/60/${product.productid}.jpg?noimage=logo`}
                              alt="Product"
                              width="330"
                              height="338"
                            />
                          </HashLink>
                          <div className="product-action-vertical">
                            <HashLink
                              to={`/product/${product.productid}#header`}
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="Quick View"
                            ></HashLink>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4
                            className="product-name"
                            style={{
                              fontSize: "15px !impotant",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            {product.productDescription.map((description) =>
                              description.type === 2 ? (
                                <HashLink
                                  to={`/product/${product.productid}#header`}
                                  key={"alpha"}
                                >
                                  {description.description}
                                </HashLink>
                              ) : (
                                ""
                              )
                            )}
                          </h4>

                          {product.productDescription.map((description) =>
                            description.type === 3 ? (
                              <div
                                className="product-desc"
                                style={{ margin: "0", color: "black" }}
                                key={description.type + product.productid}
                              >
                                {description.description}
                              </div>
                            ) : (
                              ""
                            )
                          )}
                          <div
                            className="product-desc"
                            style={{ margin: "0", color: "gray" }}
                          >
                            SKUS :
                            {product.productSkus.map((Sku) => (
                              <span
                                style={{ paddingRight: "5px" }}
                                key={product.productid + Sku.sku + Sku.name}
                              >
                                {Sku.name} : {Sku.sku}
                              </span>
                            ))}
                          </div>
                          <p>Mfg Number : {product.mfgpartno}</p>
                          <div className="product-action">
                            <a
                              // href="product-default.html"
                              className="btn-product btn-cart"
                              title="Add to Cart"
                            >
                              <i className="w-icon-cart"></i>Select Options
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="Add to wishlist"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Compare"
                            ></a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}

                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing
                    <span>
                      {Limit} of {products ? products.count : ""}
                    </span>
                    Products
                  </p>
                  <ul className="pagination">
                    <li className="prev">
                      <button
                        aria-label="Previous"
                        onClick={pagePrevious}
                        disabled={
                          products && products.previous === null ? true : false
                        }
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                      >
                        <i className="fas fa-arrow-left"></i>Prev
                      </button>
                    </li>

                    <li>
                      {currentPage} /{" "}
                      {Math.ceil(products ? products.count / Limit : 1)}
                    </li>
                    <li className="next">
                      <button
                        href="#"
                        aria-label="Next"
                        onClick={pageNext}
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                        }}
                        disabled={
                          products && products.next === null ? true : false
                        }
                      >
                        Next<i className="fas fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className="row"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "70vh",
                }}
              >
                <div style={{ width: "100px" }}>
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
