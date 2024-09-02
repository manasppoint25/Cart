import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ data, handleEdit, handleDelete }) => {
  return (
    <>
    <div className='row bg-primary text-light'>
  <center><h1>Cart Data</h1></center>
    </div>
<table className='table table-light table-bordered text-dark'>
      <thead>
        <tr>
          <td>Product Name</td>
          <td>Price</td>
          <td>Category</td>
          <td>Company</td>
          <td>Images</td>
          <td>Actions</td>
        </tr>
      </thead>
  <tbody>
        {data.map((v, i) => (
          <tr key={i}>
            <td>{v.name}</td>
            <td>{v.price}</td>
            <td>{v.cat}</td>
            <td>{v.cmp}</td>
            <td><img src={v.img} alt="" height='200px'/></td>
            <td>
            <button onClick={() => handleEdit(i)} className='btn btn-warning btn-sm'>Edit</button>

            <button onClick={() => handleDelete(i)} className='btn btn-danger btn-sm'>Delete</button>

            </td>
          </tr>
        ))}
  </tbody>
</table>
    </>
  );
};

export default Cart;
