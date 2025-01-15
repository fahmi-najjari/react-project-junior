import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function AddProduct({ onAddProduct }) {
  const [newShoe, setNewShoe] = useState({ name: '', price: '', description: '', imageUrl: '' })
  const [image, setImage] = useState()
//console.log('image',imageUrl)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewShoe({ ...newShoe, [name]: value })
  }

  const setImageFile = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'fahmi123')
    formData.append('cloud_name', 'du1iryhja')
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/du1iryhja/image/upload', formData)
      const imageUrl=res.data.secure_url
      setImage(imageUrl)
      setNewShoe((prev) => ({ ...prev, imageUrl: imageUrl }))
    } catch (error) {}
  }

  const handleAddProduct = () => {
    const modifiedObj = { ...newShoe, imageUrl: newShoe.imageUrl }
    onAddProduct(modifiedObj)
    setNewShoe({ name: '', price: '', description: '', imageUrl: '' })
  }

  return (
    <div className="card p-4">
      <h2>Add New Product</h2>
      <div className="mb-3">
        
        <input type="text" name="name" placeholder="Product Name" value={newShoe.name} onChange={handleInputChange} className="form-control" />
        
        <input type="number" name="price" placeholder="Product Price" value={newShoe.price} onChange={handleInputChange} className="form-control" />
        
        <input type="text" name="description" placeholder="Product Description" value={newShoe.description} onChange={handleInputChange} className="form-control" />
        
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="form-control" />
     
      </div>
      <button onClick={handleAddProduct} className="btn btn-primary">Add Product</button>
    </div>
  )
}

export default AddProduct





