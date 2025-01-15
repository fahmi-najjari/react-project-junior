import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function ProductList({ items, onSelectProduct, onDeleteProduct }) {
  return (
    <div className="row">
      {items.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={product.imageUrl} alt={product.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />

            <div className="card-body">

              <h5 className="card-title">{product.name}</h5>

              <p className="card-text">{product.description}</p>

              <p className="card-text"><strong>${product.price}</strong></p>

              <button className="btn btn-primary" onClick={() => onSelectProduct(product.id)}>Update</button>

              <button className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}>Delete</button>

              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList