import React, { useState, useEffect } from 'react'
import ProductList from './ProductList'

function Search({ items }) {
  const [filteredItems, setFilteredItems] = useState(items)
  const [query, setQuery] = useState('')
  const [searchBy, setSearchBy] = useState('name')

  useEffect(() => {
    setFilteredItems(items)
  }, [items])

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)

    const newFilteredItems = items.filter((product) => {
      if (searchBy === 'name') {
        return product.name.toLowerCase().includes(value.toLowerCase())
      } else if (searchBy === 'price') {
        return product.price.toString().includes(value)
      }
      return true
    })

    setFilteredItems(newFilteredItems)
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Search Products</h2>

      <div className="row mb-4">

        <div className="col-md-6">

          <input type="text" className="form-control" placeholder={`Search by ${searchBy}`} value={query} onChange={handleSearch} />
          </div>
          
          <div className="col-md-6">
          <select className="form-select" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            
            <option value="name">Search by Name</option>
            <option value="price">Search by Price</option>
           
            </select>
           
            </div>
      
      </div>

      <ProductList items={filteredItems} />

      {filteredItems.length === 0 && (
        <p className="text-center text-muted">No products found.</p>
      )}
    </div>
  )
}

export default Search
