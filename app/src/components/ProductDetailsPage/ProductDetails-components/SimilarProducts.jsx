import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
class SimilarProducts extends Component {
  render() {
    return (
      <section className="related-product-section">
        <div className="title-link-wrapper mb-4">
          <h4 className="title">Similar Products</h4>
        </div>
        <div className="row cols-4 cols-md-4 cols-sm-6 cols-2">
          {this.props.products.map((product) => (
            <div className="product" key={product.productid}>
              <figure className="product-media">
                <HashLink to={`/product/${product.productid}#header`}>
                  <img
                    src={`https://content.etilize.com/Large/${product.productid}.jpg?noimage=logo`}
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </HashLink>
                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                  <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                  <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                <div className="product-action">
                  <HashLink
                    to={`/product/${product.productid}#header`}
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </HashLink>
                </div>
              </figure>
              <div className="product-details">
                <h4 className="product-name">
                  {product.productDescription.map((description, key) =>
                    description.type === 2 ? (
                      <HashLink key={description.description + key} to={`/product/${product.productid}#header`}>
                        {description.description}
                      </HashLink>
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
                <div className="ratings-container">
                  <p>Mfg Number : {product.mfgpartno}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default SimilarProducts;
