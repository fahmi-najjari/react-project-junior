import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from './component/ProductList'
import Navbar from './component/Navbar'
import AddProduct from './component/AddProduct'
import Search from './component/Search'
import UpdateProduct from './component/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [products, setProducts] = useState([])
  const [currentView, setView] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleAddProduct = async (newProduct) => {
    try {
      await axios.post('http://localhost:5000/api/product', newProduct)
      fetchProducts()
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/${id}`)
      setProducts(products.filter(product => product.id !== id))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`http://localhost:5000/api/product/${id}`, updatedProduct)
      fetchProducts()
      setView('all')
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const handleSelectProduct = (id) => {
    const productToUpdate = products.find((product) => product.id === id)
    if (!productToUpdate) {
      console.error('Product not found')
      return
    }
    setSelectedProduct(productToUpdate)
    setView('update')
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const renderView = () => {
    switch (currentView) {
      case 'all':
        return <ProductList items={products} onSelectProduct={handleSelectProduct} onDeleteProduct={handleDeleteProduct} />
      case 'add':
        return <AddProduct onAddProduct={handleAddProduct} />
      case 'search':
        return <Search items={products} />
      case 'update':
        return <UpdateProduct update={handleUpdateProduct} product={selectedProduct} />
      default:
        return <ProductList items={products} onSelectProduct={handleSelectProduct} onDeleteProduct={handleDeleteProduct} />
    }
  }

  return (
    <div>
      <Navbar currentView={currentView} setView={setView} selectedProduct={selectedProduct} />
      <div className="container mt-4">{renderView()}</div>
    </div>
  )
}

export default App