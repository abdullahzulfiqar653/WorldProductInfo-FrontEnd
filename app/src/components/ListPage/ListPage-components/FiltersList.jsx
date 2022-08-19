import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import categoryFilter from "../../services/FakeApi/categoryFilter";
import productTypeFilter from "../../services/FakeApi/productTypeFilter";
import manufacturerFilter from "../../services/FakeApi/manufacturerFilter";
class FiltersList extends Component {
  state = {
    category: undefined,
    productType: undefined,
    manufacturer: undefined,
  };
  componentDidMount() {
    this.setState({ category: categoryFilter });
    this.setState({ productType: productTypeFilter });
    this.setState({ manufacturer: manufacturerFilter });
  }
  
  render() {
    const { category, productType, manufacturer } = this.state;
    return (
      <div className="sidebar-content scrollable">
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>Categories Filter</span>
          </h3>
          <ul className="widget-body filter-items search-ul">
            {category
              ? category.map((category) => (
                  <li key={category.categoryid}>
                    <HashLink
                      to={`/product-list/${category.categoryid}#header`}
                    >
                      {category.category_label}(
                      {category.category_product_count})
                    </HashLink>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>Product Type</span>
          </h3>
          <div className="widget-body">
            <ul className="filter-items search-ul">
              {productType
                ? productType.map((productType) => (
                    <li key={productType.valueid}>
                      <HashLink
                        to={`/product-list/${productType.valueid}#header`}
                      >
                        {productType.value}({productType.category_product_count}
                        )
                      </HashLink>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>Manufacturer Filter</span>
          </h3>
          <ul className="widget-body filter-items search-ul">
            {manufacturer
              ? manufacturer.map((manufacturer) => (
                  <li key={manufacturer.manufacturerid}>
                    <HashLink
                      to={`/product-list/${manufacturer.manufacturerid}#header`}
                    >
                      {manufacturer.name} (
                      {manufacturer.manufacturer_product_count})
                    </HashLink>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

export default FiltersList;
