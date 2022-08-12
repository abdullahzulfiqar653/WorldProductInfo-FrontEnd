import FiltersList from "./FiltersList";
import React, { Component } from "react";
import ProductsList from "./ProductsList";

class MainListPage extends Component {
  state = {
    filterStatus: "page-content mb-10",
  };
  openFilters = () => {
    this.setState({ filterStatus: "page-content mb-10 sidebar-active" });
  };
  closeFilters = () => {
    this.setState({ filterStatus: "page-content mb-10" });
  };
  render() {
    return (
      <div className={this.state.filterStatus}>
        <div className="container-fluid">
          <div className="shop-content">
            <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper">
              <div
                className="sidebar-overlay"
                onClick={this.closeFilters}
              ></div>
              <a className="sidebar-close" href="#" onClick={this.closeFilters}>
                <i className="close-icon"></i>
              </a>

              <FiltersList categoryId={123} />
            </aside>
            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left">
                  <button
                    onClick={this.openFilters}
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
                      <option selected="selected">Bestmatch</option>
                      <option style={{ display: "none" }}>
                        Sort by Bestmatch
                      </option>
                      <option style={{ display: "none" }}>
                        Sort by average rating
                      </option>
                      <option style={{ display: "none" }}>
                        Sort by latest
                      </option>
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
                    <select name="count" className="form-control">
                      <option value="10" selected="selected">
                        10
                      </option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>
              </nav>
              <ProductsList />
              <div className="toolbox toolbox-pagination justify-content-between">
                <p className="showing-info mb-2 mb-sm-0">
                  Showing<span>1-12 of 60</span>Products
                </p>
                <ul className="pagination">
                  <li className="prev disabled">
                    <a
                      href="#"
                      aria-label="Previous"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-left"></i>Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      Next<i className="w-icon-long-arrow-right"></i>
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
}

export default MainListPage;
