
import "../styles/BuynowStyle.css";
import React, { useState } from 'react';
import axios from 'axios';
import base_url from "../api/bootapi";

function BuyNow() {
  const [formData, setFormData] = useState({
    name: '',
    dish: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the backend to store the form data
    axios.post(`${base_url}/customers`, formData)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        // Reset the form
        setFormData({
          name: '',
          dish: '',
          address: '',
          phone: ''
        });
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Confirm order</h3>
      <input
        type='text'
        name='name'
        className='login-name'
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='dish'
        className='dish-enter'
        placeholder='Enter dish name'
        value={formData.dish}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='address'
        className='address-enter'
        placeholder='Enter address'
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='phone'
        className='second-phone'
        placeholder='Enter your Phone No'
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input type='submit' name='submit' className='submit' value='Place Order' />
    </form>
  );
}

export default BuyNow