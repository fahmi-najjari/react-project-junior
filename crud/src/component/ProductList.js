import React from 'react';
import OneProduct from './OneProduct.js';

function ProductList({ items }) {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {items.map((product) => (
          < OneProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;