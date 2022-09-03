import './Navbar.css';
import Loader from '../SmallLoader';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { loadCategory } from '../../../actions/actions';
import { categoryList } from './categories';
class BottomNav extends Component {
  state = {
    categoryRange: 15,
    opacity: 0,
  };
  componentDidMount() {
    this.props.loadCategories();
  }
  isParent(id) {
    return this.props.categories.some((obj) => obj.parentcategoryid === id);
  }

  getCategoryList(catLevel, parent = null) {
    if (!parent) {
      return this.props.categories.filter((category) => category.catlevel === catLevel);
    }
    return this.props.categories.filter(
      (category) => category.catlevel === catLevel && category.parentcategoryid === parent,
    );
  }
  getClassName(level) {
    if (level > 1) {
      return 'submenu';
    } else if (level > 0) {
      return 'custom-megamenu';
    }
    return 'menu vertical-menu category-menu';
  }

  // displayCategories(catLevel = 0, categoryid = null) {
  //   return (
  //     <ul className={this.getClassName(catLevel)} style={{ top: '0', padding: '0' }}>
  //       {this.getCategoryList(catLevel + 1, categoryid).map((category, range) => {
  //         return (
  //           <li key={category.categoryid} className={this.isParent(category.categoryid) ? 'has-submenu' : ''}>
  //             <Link
  //               to={`/product-list/?categoryid=${category.categoryid}&flag=category#header`}
  //               style={{ padding: '8px 10px' }}
  //             >
  //               {category.category_label}
  //             </Link>
  //             {this.displayCategories(catLevel + 1, category.categoryid)}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }
  displayCategories() {
    return (
      <ul className="menu vertical-menu category-menu" style={{ top: '0', padding: '0' }}>
        {categoryList.map((category) => {
          return (
            <li key={category.categoryid}>
              <Link
                to={`/product-list/?categoryid=${category.categoryid}&flag=category#header`}
                style={{ padding: '8px 10px' }}
              >
                {category.category_label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { categories, loading } = this.props;
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
                  title="Browse Categories"
                >
                  <i className="w-icon-category"></i>
                  <span style={{ display: 'flex' }}>Browse Categories {loading === true ? <Loader /> : ''}</span>
                </Link>
                <div className="dropdown-box">{categories && this.displayCategories()}</div>
              </div>
              <nav className="main-nav">
                <ul className="menu active-underline">
                  <li className="active">
                    <NavLink to={'/home'}>Home</NavLink>
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
  loading: state.loading,
});

const mapDispatchToProps = (disptch) => ({
  loadCategories: () => disptch(loadCategory()),
});

// container component
// wraps presentation component (BottomNav)

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
