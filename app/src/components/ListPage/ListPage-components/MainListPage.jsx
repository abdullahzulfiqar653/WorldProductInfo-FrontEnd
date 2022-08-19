import { useState } from "react";
import FiltersList from "./FiltersList";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { productListLoaded } from "../../../actions/actions";

function MainListPage(props) {
  const [filterStatus, setFilterStatus] = useState("page-content mb-10");
  const [listRange, setListRange] = useState(10);
  const [productStart, setProductStart] = useState(0);
  const [pageList, setPageList] = useState(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListLoaded(props.id, listRange));
    paginate();
  }, [props.id, listRange, productStart]);
  const products = useSelector((state) => state.products);
  const openFilters = () => {
    setFilterStatus("page-content mb-10 sidebar-active");
  };
  const closeFilters = () => {
    setFilterStatus("page-content mb-10");
  };
  const handelChange = (e) => {
    // console.log(e.target.value);
    setListRange(e.target.value);
  };
  const setPage = (range) => {
    setProductStart(range);
  };
  const paginate = () => {
    let list = [];
    if (products) {
      for (let i = 1; i <= products.count / listRange; i++) {
        list.push({
          value: i * listRange,
          display: i,
        });
      }
      setPageList(list);
    }
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
            <FiltersList categoryId={props.id} />
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
                <div className="toolbox-item toolbox-sort select-box text-dark">
                  <label>Sort By :</label>
                  <select name="orderby" className="form-control">
                    <option>Bestmatch</option>
                    <option style={{ display: "none" }}>
                      Sort by Bestmatch
                    </option>
                    <option style={{ display: "none" }}>
                      Sort by average rating
                    </option>
                    <option style={{ display: "none" }}>Sort by latest</option>
                    <option style={{ display: "none" }}>
                      Sort by pric: low to high
                    </option>
                    <option style={{ display: "none" }}>
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
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
            {/* product List  */}
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
                          src={`https://content.etilize.com/Large/${product.productid}.jpg?noimage=logo`}
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
            {/* product list end  */}
            <div className="toolbox toolbox-pagination justify-content-between">
              <p className="showing-info mb-2 mb-sm-0">
                Showing
                <span>
                  {listRange} of {products ? products.count : ""}
                </span>
                Products
              </p>
              <ul className="pagination">
                <li className="prev disabled">
                  <a
                    href="#"
                    aria-label="Previous"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    <i className="fas fa-arrow-left"></i>Prev
                  </a>
                </li>
                {/* <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li> */}

                {/* {pageList
                  ? pageList.map(
                      (num) => (
                        <li className="page-item" key={num.display}>
                          <a className="page-link" onClick={setPage(num.value)}>
                            {num.display}
                          </a>
                        </li>
                      )
                      // console.log(num)
                    )
                  : ""} */}
                {/* {paginate} */}
                <li className="next">
                  <a href="#" aria-label="Next">
                    Next<i className="fas fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainListPage;
