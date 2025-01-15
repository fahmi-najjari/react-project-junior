import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function UpdateProduct({ update, product }) {
  const [newShoe, setNewShoe] = useState({ name: '', price: '', description: '', image: '' })
  const [image, setImage] = useState()

  useEffect(() => {
    if (product) {
      setNewShoe({ name: product.name, price: product.price, description: product.description, image: product.image })
    }
  }, [product])

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
      setImage(res.data.secure_url)
      setNewShoe((prev) => ({ ...prev, image: res.data.secure_url }))
    } catch (error) {}
  }

  const handleUpdateProduct = () => {
    if (!newShoe.name || !newShoe.price || !newShoe.description || !newShoe.image) {
      alert('Please fill out all fields.')
      return
    }
    update(product.id, newShoe)
  }

  return (
    <div className="card p-4">
      <h2>Update Product</h2>
      <div className="mb-3">
        <input type="text" name="name" placeholder="Product Name" value={newShoe.name} onChange={handleInputChange} className="form-control" />
        <input type="number" name="price" placeholder="Product Price" value={newShoe.price} onChange={handleInputChange} className="form-control" />
        <input type="text" name="description" placeholder="Product Description" value={newShoe.description} onChange={handleInputChange} className="form-control" />
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="form-control" />
      </div>
      <button onClick={handleUpdateProduct} className="btn btn-primary">
        Update
      </button>
    </div>
  )
}

export default UpdateProduct

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProduct({ update, product }) {
  const [uptodateProduct, setUptodoproduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const [image, setImage] = useState('');

  useEffect(() => {
    if (product) {
      setUptodoproduct({
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUptodoproduct({ ...uptodateProduct, [name]: value });
  };

  const setImageFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fahmi123');
    formData.append('cloud_name', 'du1iryhja');

    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/du1iryhja/image/upload',
        formData
      );
      setImage(res.data.secure_url);
      setUptodoproduct((prev) => ({ ...prev, image: res.data.secure_url }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleUpdateProduct = () => {
    if (product) {
      // Now correctly passing both the product id and the updated data
      update(product.id, uptodateProduct);
    }
  };

  return (
    <>
      <div>Update Product</div>
      <input
        type="text"
        value={uptodateProduct.name}
        name="name"
        placeholder="Enter new name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={uptodateProduct.description}
        name="description"
        placeholder="Enter new description"
        onChange={handleInputChange}
      />
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      <button onClick={handleUpdateProduct}>Update Product</button>
    </>
  );
}

export default UpdateProduct;
 */