import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import { Link, Route, Routes } from 'react-router-dom';

const App = ({ data, product, isEditing, change, handleSubmit, handleEdit, handleDelete }) => {
  return (
    <>
  <Link to='/cart'>Cart</Link>
   <Routes>
        <Route 
          path='/cart' 
          element={<Cart data={data} handleDelete={handleDelete} handleEdit={handleEdit}/>}/>
      </Routes>
      <center><h3 className='display-6'>{isEditing ? 'Edit Product' : 'Add Product'}</h3></center> 
     
  <form onSubmit={handleSubmit} className='form-control'>
        <div className='mb-3'>
          Product Name<input type="text" name="name" value={product.name} onChange={change} className='form-control'/>
        </div>

        <div className='mb-3'>
          Company Name<input type="text" name="cmp" value={product.cmp} onChange={change} className='form-control'/>
        </div>

        <div className='mb-3'>
          Category<input type="text" name="cat" value={product.cat} onChange={change} className='form-control'/>
        </div>

        <div className='mb-3'>
          Price<input type="number" name="price" value={product.price} onChange={change} className='form-control'/>
        </div>
        <div className='mb-3'>
          Image Url<input type="text" name="img" value={product.img} onChange={change} className='form-control'/>
        </div>

        <center>

          <button type="submit" className='btn btn-primary mt-3'>
            {isEditing ? 'Update Product' : 'Add Product'}
          
          </button>

        </center>
    </form>
    </>
  );
};

export default App;
