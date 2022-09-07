import './Navbar.css';
// import Loader from '../SmallLoader';
// import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { loadCategory } from '../../../actions/actions';
import { categoryList } from './categories';
class BottomNav extends Component {
  state = {
    categoryRange: 15,
    opacity: 0,
  };
  // componentDidMount() {
  //   this.props.loadCategories();
  // }
  isParent(id) {
    return categoryList.some((obj) => obj.parentcategoryid === id);
  }

  getCategoryList(catLevel, parent = null) {
    if (!parent) {
      return categoryList.filter((category) => category.catlevel === catLevel);
    }
    return categoryList.filter((category) => category.catlevel === catLevel && category.parentcategoryid === parent);
  }
  getClassName(level) {
    if (level > 1) {
      return 'submenu';
    } else if (level > 0) {
      return 'custom-megamenu';
    }
    return 'menu vertical-menu category-menu';
  }

  displayCategories(catLevel = 0, categoryid = null) {
    return (
      <ul className={this.getClassName(catLevel)} style={{ top: '0', padding: '0' }}>
        {this.getCategoryList(catLevel + 1, categoryid).map((category, range) => {
          return (
            <li key={category.categoryid} className={this.isParent(category.categoryid) ? 'has-submenu' : ''}>
              <Link
                to={`/product-list/?categoryid=${category.categoryid}&flag=category#header`}
                style={{ padding: '8px 10px' }}>
                {category.category_label}
              </Link>
              {this.displayCategories(catLevel + 1, category.categoryid)}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    // const { categories, loading } = this.props;
    return (
      <div className="header-bottom sticky-content fix-top sticky-header">
        <div className="container">
          <div className="inner-wrap">
            <div className="header-left">
              <div className="dropdown category-dropdown has-border" data-visible="true">
                <Link
                  className="category-toggle text-dark"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="Browse Categories">
                  <i className="w-icon-category"></i>
                  <span style={{ display: 'flex' }}>Browse Categories</span>
                </Link>
                <div className="dropdown-box">{this.displayCategories()}</div>
              </div>
              <nav className="main-nav">
                <ul className="menu active-underline">
                  <li className="active">
                    <NavLink to={'/home'}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/product-list/?categoryid=10468&flag=category#header`}>Systems</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/product-list/?categoryid=10153&flag=category#header`}>Printers</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/product-list/?categoryid=10145&flag=category#header`}>Display</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/product-list/?categoryid=10040&flag=category#header`}>Network</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/product-list/?categoryid=5132&flag=category#header`}>Devices</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/product-list/?categoryid=4900&flag=category#header`}>Accessories</NavLink>
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

// const mapStateToProps = (state) => ({
//   categories: state.category,
//   loading: state.loading,
// });

// const mapDispatchToProps = (disptch) => ({
//   loadCategories: () => disptch(loadCategory()),
// });

// container component
// wraps presentation component (BottomNav)

export default BottomNav;
