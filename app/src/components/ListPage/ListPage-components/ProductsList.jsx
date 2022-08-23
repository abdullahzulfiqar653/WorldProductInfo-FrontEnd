import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
class ProductsList extends Component {
  render() {
    return (
      <div className="product-wrapper row cols-xl-2 cols-sm-1 cols-xs-2 cols-1">
        {this.props.products.map((product) => (
          <div className="product product-list product-select">
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
              <h4 className="product-name" style={{ fontSize: '15px !impotant' }}>
                {product.productDescription.map((description) =>
                  description.type === 2 ? (
                    <HashLink to={`/product/${product.productid}#header`}>{description.description}</HashLink>
                  ) : (
                    ''
                  ),
                )}
              </h4>
              {product.productDescription.map((description) =>
                description.type === 3 ? (
                  <div className="product-desc" style={{ margin: '0', color: 'black' }}>
                    {description.description}
                  </div>
                ) : (
                  ''
                ),
              )}
              <div className="product-desc" style={{ margin: '0', color: 'gray' }}>
                SKUS :
                {product.productSkus.map((Sku) => (
                  <span style={{ paddingRight: '5px' }}>
                    {Sku.name} : {Sku.sku}
                  </span>
                ))}
              </div>
              <p>Mfg Number : {product.mfgpartno}</p>
              <div className="product-action">
                <button className="btn-product btn-cart" title="Add to Cart">
                  <i className="w-icon-cart"></i>Select Options
                </button>
                <button className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></button>
                <button className="btn-product-icon btn-compare w-icon-compare" title="Compare"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsList;
