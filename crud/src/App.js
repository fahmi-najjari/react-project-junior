import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  useEffect(() => {
   

    fetchProducts();
  }, []);

 
  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post('http://localhost:5000/api/product', newProduct);
       fetchProducts()
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductList items={products} />
      <AddProduct onAddProduct={handleAddProduct} />
    </div>
  );
}

export default App;