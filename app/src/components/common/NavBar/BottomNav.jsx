import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { categoryLoaded } from "../../../actions/actions";
class BottomNav extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    const { categories } = this.props;
    console.log(this.props);
    return (
      <div className="header-bottom sticky-content fix-top sticky-header">
        <div className="container">
          <div className="inner-wrap">
            <div className="header-left">
              <div
                className="dropdown category-dropdown has-border"
                data-visible="true"
              >
                <a
                  className="category-toggle text-dark"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="Browse Categories"
                >
                  <i className="w-icon-category"></i>
                  <span>Browse Categories</span>
                </a>

                <div className="dropdown-box">
                  <ul className="menu vertical-menu category-menu">
                    {categories
                      ? categories.map((category) => {
                          let a = null;
                          if (category.catlevel === 1) {
                            categories.map((cat) => {
                              if (
                                cat.parentcategoryid === category.categoryid
                              ) {
                                a = "s";
                              }
                            });
                            return a === null ? (
                              <li key={category.categoryid}>
                                <Link
                                  to={`/product-list/${category.categoryid}#header`}
                                >
                                  {category.category_label}
                                </Link>
                              </li>
                            ) : (
                              <li
                                key={category.categoryid}
                                className="has-submenu"
                              >
                                <Link
                                  to={`/product-list/${category.categoryid}#header`}
                                >
                                  {category.category_label}
                                </Link>
                                <ul
                                  className="submenu"
                                  style={{
                                    top: "0",
                                    padding: "0",
                                    width: "260px",
                                  }}
                                >
                                  {categories
                                    .filter(
                                      (cat) =>
                                        cat.parentcategoryid ===
                                        category.categoryid
                                    )
                                    .map((s) => {
                                      let b = null;
                                      categories.map((cat) => {
                                        if (
                                          cat.parentcategoryid === s.categoryid
                                        ) {
                                          b = "s";
                                        }
                                      });
                                      // console.log(b);
                                      return b === null ? (
                                        <li key={s.categoryid}>
                                          <Link
                                            to={`/product-list/${s.categoryid}#header`}
                                            style={{
                                              padding: "13px 10px",
                                              borderBottom: "1px solid #eeeeee",
                                            }}
                                          >
                                            {s.category_label}
                                          </Link>
                                        </li>
                                      ) : (
                                        <li
                                          key={s.categoryid}
                                          className="has-submenu"
                                        >
                                          <Link
                                            to={`/product-list/${s.categoryid}#header`}
                                            style={{
                                              padding: "13px 10px",
                                              borderBottom: "1px solid #eeeeee",
                                            }}
                                          >
                                            {s.category_label}
                                          </Link>
                                          <ul
                                            className="submenu"
                                            style={{
                                              top: "0",
                                              padding: "0",
                                              width: "260px",
                                            }}
                                          >
                                            {categories
                                              .filter(
                                                (category) =>
                                                  category.parentcategoryid ===
                                                  s.categoryid
                                              )
                                              .map((three) => (
                                                <li key={three.categoryid}>
                                                  <Link
                                                    to={`/product-list/${three.categoryid}#header`}
                                                    style={{
                                                      padding: "13px 10px",
                                                      borderBottom:
                                                        "1px solid #eeeeee",
                                                    }}
                                                  >
                                                    {three.category_label}
                                                  </Link>
                                                </li>
                                              ))}
                                          </ul>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </li>
                            );
                          }
                        })
                      : ""}
                  </ul>
                </div>
              </div>
              <nav className="main-nav">
                <ul className="menu active-underline">
                  <li className="active">
                    <NavLink to={"/home"}>Home</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.category,
});

const mapDispatchToProps = (disptch) => ({
  loadCategories: () => disptch(categoryLoaded()),
});

//container component
//wraps presentation component (BottomNav)

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
