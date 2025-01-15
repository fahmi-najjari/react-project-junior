import React from 'react';
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function OneProduct({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <ProductImage
        src={product.imageUrl }
        alt={product.name}
      />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
}

export default OneProduct;