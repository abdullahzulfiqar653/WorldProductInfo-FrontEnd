import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../ListPage/ListPage-components/scroll.css';
import { categoryList } from '../../common/NavBar/categories';
function CategoryList(props) {
  const [categoryCollapsed, setCategoryCollapsed] = useState(false);
  return (
    <div className="sidebar-content scrollable scroll">
      <div className="pin-wrapper" style={{ height: '1813.3px' }}>
        <div className="sticky-sidebar" style={{ borderBottom: '0px none rgb(102, 102, 102)', width: '260px' }}>
          <div className="widget widget-collapsible">
            <h3
              className={categoryCollapsed === false ? 'widget-title' : 'widget-title collapsed'}
              onClick={(e) => {
                if (categoryCollapsed === false) {
                  setCategoryCollapsed(true);
                } else {
                  setCategoryCollapsed(false);
                }
              }}>
              <span>Categories</span>
              <span class="toggle-btn"></span>
            </h3>
            <div className="widget-body">
              <ul className="filter-items search-ul">
                {categoryList.map((obj) =>
                  obj.catlevel === 1 ? (
                    <li key={obj.categoryid}>
                      <HashLink to={`/product-list/?categoryid=${obj.categoryid}&flag=category#header`}>
                        {obj.category_label}
                      </HashLink>
                    </li>
                  ) : (
                    ''
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
