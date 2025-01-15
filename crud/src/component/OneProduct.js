import React from 'react'

function OneProduct(props) {
  const { product } = props

  return (
    <div>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
}

export default OneProduct