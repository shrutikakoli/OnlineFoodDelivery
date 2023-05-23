import React, { useState } from 'react';
import axios from 'axios';
import base_url from "../api/bootapi";
import { Link } from "react-router-dom";


const FormData = () => {
    const [formData, setFormData] = useState({
      id: '',
      custAdd: '',
      custName: '',
      phoneNo: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to the backend server using Axios
      axios.post(`${base_url}/Customers`, formData)
        .then((response) => {
          console.log(response.data); // Handle the response from the server
        })
        .catch((error) => {
          console.error(error); // Handle any errors that occur during the request
        });
    };
  

    return (
        <form onSubmit={handleSubmit}>
            <div className='form form-bg'>
            <div className="headerContainer-od">
              <h1>Fill Your Details To Place Order</h1></div>
                <div className='card p-5 trans-card'>

                    <div className="mb-3">
                        <label className="form-label mx-1">ID :   </label>
                            <input type="text" className="form-control" id = "id" name="id" value={formData.id} onChange={handleChange} />
                       </div>

                    <div className="mb-3">
                        <label className="form-label mx-1">Customer Name :</label>
                        <input type="text" className="form-control" id="custName" name="custName" value={formData.custName} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label mx-1">Address :</label>
                        <input type="text" className="form-control" id="custAdd" name="custAdd" value={formData.custAdd} onChange={handleChange} />
                    </div>


                    <div className="mb-3">
                        <label className="form-label mx-1">Phone No :</label>
                        <input type="text" className="form-control" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                    </div>
    
                        <button type="submit" className='btn btn-primary' onChange={handleChange}>Place Order</button>
                    

                </div>

            </div>
        </form>

    );
};

export default FormData;