// import Cart from '../Cart/Cart';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';

class MiddleNav extends Component {
  state = {
    searchQuery: '',
  };
  handelSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <div className="header-middle">
        <div className="container">
          <div className="header-left mr-md-4">
            <Link to="#" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle"></Link>
            <NavLink to={'/home'} className="logo ml-lg-0">
              <img src={Logo} alt="logo" width="180" height="50" />
              {/* <h2 className="mt-2 mb-2" style={{ fontFamily: 'wolmart !important' }}>
                World Product Info
              </h2> */}
            </NavLink>
            <div className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search in..."
                style={{ borderLeft: '2px solid #336699' }}
                required
                value={this.state.searchQuery}
                onChange={(e) => this.handelSearch(e.currentTarget.value)}
              />
              <Link
                className="btn btn-search"
                type="submit"
                to={`/home/?flag=search&search=${this.state.searchQuery}#header`}>
                <i className="w-icon-search"></i>
              </Link>
            </div>
          </div>
          <div className="header-right ml-4">
            {/* <Link className="compare label-down link d-xs-show">
              <i className="w-icon-compare"></i>
              <span className="compare-label d-lg-show">Compare</span>
            </Link>
            <Cart /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleNav;
