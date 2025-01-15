import React, { useState } from 'react';

import axios from 'axios';

function AddProduct({ onAddProduct }) {
  const [newShoe, setNewShoe] = useState({ name: '', price: '',  description: '', image: '' })
    const[image,setImage]=useState()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShoe({ ...newShoe, [name]: value })
  };
  const setImageFile=async (file)=>{
console.log(file);
const formData= new FormData()
formData.append('file',file)
formData.append('upload_preset','fahmi123')
formData.append('cloud_name','du1iryhja')
try {
  const res = await axios.post('https://api.cloudinary.com/v1_1/du1iryhja/image/upload',formData)
  console.log(res);
  setImage(res.data.secure_url )
  


  
} catch (error) {
  console.error(error)
  
}
  }
  

  const handleAddShoe = () => {
    onAddProduct(newShoe);
    setNewShoe({   name: '',   price: '',   description: '',   image: '' })
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input type="text" name="name" placeholder="Shoe Name" value={newShoe.name} onChange={handleInputChange} />
      <input type="number" name="price" placeholder="Shoe Price" value={newShoe.price} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Shoe Description" value={newShoe.description} onChange={handleInputChange} />
      <input type="text" name="image" placeholder="Image URL" value={newShoe.image} onChange={handleInputChange} /> 
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      <button onClick={handleAddShoe}>Add Shoe</button>
    </div>
  );
}

export default AddProduct;