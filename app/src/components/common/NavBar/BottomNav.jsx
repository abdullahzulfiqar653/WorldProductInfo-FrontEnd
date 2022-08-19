import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { categoryLoaded } from "../../../actions/actions";
class BottomNav extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  isParent(id) {
    // Object.keys(obj).map((key, index) => error.data[key])
    return this.props.categories.some((obj) => obj.parentcategoryid === id);
  }

  getCategories(catLevel, parent = null) {
    if (!parent) {
      return this.props.categories.filter(
        (category) => category.catlevel === catLevel
      );
    }
    return this.props.categories.filter(
      (category) =>
        category.catlevel === catLevel && category.parentcategoryid === parent
    );
  }
  getChilds(id, categoryid) {
    return (
      <ul
        className={categoryid ? "submenu" : "menu vertical-menu category-menu"}
        style={{ top: "0", padding: "0", width: "260px" }}
      >
        {this.getCategories(id + 1, categoryid).map((category) => (
          <li
            key={category.categoryid}
            className={this.isParent(category.categoryid) ? "has-submenu" : ""}
          >
            <Link to={`/product-list/${category.categoryid}#header`}>
              {category.category_label}
            </Link>
            {this.getChilds(id + 1, category.categoryid)}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    const { categories } = this.props;
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
                  {categories && this.getChilds(0, null)}
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
