import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup.css'

const Signup = ({ fetchDatas }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { name, email, password, confirmpassword } = formData;

        // Include role in the signup request.
        await axios.post(`https://localhost:7115/api/Signupdata`, {
            name,
            email,
            password,
            confirmpassword,
            role: false // or true, based on your logic
        });

        console.log('Data saved successfully');

        if (fetchDatas) {
            fetchDatas(); 
        }

        setFormData({
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        });
    } catch (error) {
        console.error('Error saving data', error.response.data);
    }
};

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2 className='logintitle'>Signup</h2>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} />
          </label>
        </div>

        <button type="submit" className="btnSub">Submit</button>
        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
