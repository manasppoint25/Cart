import React, { useState } from 'react';
import App from './App';

const ProductManager = () => {
  const [data, updatedata] = useState([]);
  const [product, updateproduct] = useState({ name: '', cmp: '', cat: '', price: 0,img:''});
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const change = (e) => {
    updateproduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedData = data.map((item, index) => 
        index === currentIndex ? product : item
      );
      updatedata(updatedData);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      updatedata([...data, product]);
    }
    updateproduct({ name: '', cmp: '', cat: '', price: 0,img:'' });
  };

  const handleEdit = (index) => {
    setCurrentIndex(index);
    updateproduct(data[index]);
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    updatedata(updatedData);
  };

  return (
    <div>
      <App 
        data={data} 
        product={product} 
        isEditing={isEditing}
        change={change}
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ProductManager;
