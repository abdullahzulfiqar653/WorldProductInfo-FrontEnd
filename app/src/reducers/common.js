export const makeProductsArray = (payload, products) => {
  if (products !== undefined) {
    const productsNewArray = products.results.concat(payload.results);
    payload.results = productsNewArray;
  }

  return payload;
};
