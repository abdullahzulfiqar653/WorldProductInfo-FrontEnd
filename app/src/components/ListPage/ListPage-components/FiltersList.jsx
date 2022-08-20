import React from "react";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryFilterLoaded,
  productTypeFilterLoaded,
  manufacturerFilterLoaded,
} from "../../../actions/actions";
function FiltersList(props) {
  // categoryid's are being dispatched here in use effect hook so that the filters lists could be fetched
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryFilterLoaded(props.categoryId));
    dispatch(productTypeFilterLoaded(props.categoryId));
    dispatch(manufacturerFilterLoaded(props.categoryId));
  }, [props.categoryId]);
  // setting the states to the variables to use in the components
  // all of these states are comming from the store
  const category = useSelector((state) => state.categoryFilter);
  const productType = useSelector((state) => state.productTypeFilter);
  const manufacturer = useSelector((state) => state.manufacturerFilter);
  return (
    <div className="sidebar-content scrollable">
      {category ? (
        category.length === 0 ? (
          ""
        ) : (
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
        )
      ) : (
        ""
      )}
      {productType ? (
        productType.length === 0 ? (
          ""
        ) : (
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
                          to={`/product-list/${props.categoryId}/${productType.valueid}#header`}
                        >
                          {productType.value}(
                          {productType.category_product_count})
                        </HashLink>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          </div>
        )
      ) : (
        ""
      )}
      {manufacturer ? (
        manufacturer.length === 0 ? (
          ""
        ) : (
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
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default FiltersList;
