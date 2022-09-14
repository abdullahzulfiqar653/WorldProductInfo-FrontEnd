const ProductDescription = ({ product }) => {
  return (
    <div className="col-md-6 mb-4 mb-md-6">
      <div className="product-details" data-sticky-options="{'minWidth': 767}">
        {/* Displaying description of type 2 and 3 */}
        {product !== undefined
          ? product.productDescription.map((title) => {
              if (title.type === 2) {
                return (
                  <h1 key={title.type} className="product-title">
                    {title.description}
                  </h1>
                );
              } else if (title.type === 3) {
                return (
                  <h1 key={title.type} className="product-title3">
                    {title.description}
                  </h1>
                );
              }
              return '';
            })
          : ''}

        {/* Displaying Skus */}
        <div className="product-bm-wrapper">
          <div className="product-meta">
            <div className="product-sku">
              {product.productSkus.map((sku) => (
                <span style={{ padding: '0 3px' }} key={sku.name + sku.sku}>
                  {sku.name} : {sku.sku}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Displaying Product features */}
        <div className="product-short-desc">
          <ul className="list-type-check list-style-none">
            {product.productFeatures.map((feature) => (
              <li key={feature.ordernumber}>{feature.text}</li>
            ))}
          </ul>
        </div>

        {/* Product MgfPart number */}
        <p style={{ marginBottom: 5 }}>Mfg Number: {product.mfgpartno}</p>

        {/* Product rating section */}
        <div className="ratings-container">
          <div className="ratings-full">
            <span className="ratings" style={{ width: '0%' }}></span>
          </div>
        </div>
        <hr className="product-divider" />
        <div className="product-variation-price">
          <span></span>
        </div>

        {/* Add to cart section */}
        <div className="fix-bottom product-sticky-content sticky-content">
          <div className="product-form container">
            <div className="product-qty-form">
              <div className="input-group">
                <input
                  className="quantity form-control"
                  type="number"
                  min="1"
                  max="10000000"
                  // value={1}
                  placeholder="Quantity"
                />
              </div>
            </div>
            <button className="btn btn-primary btn-cart">
              <i className="w-icon-cart"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* End Sections */}
      </div>
    </div>
  );
};

export default ProductDescription;
