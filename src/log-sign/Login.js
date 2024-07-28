import axios from 'axios';
import React, { useState } from 'react'
import '../log-sign/login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

const navigate= useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://localhost:7115/api/Signupdata/login', {
            email,
            password,
        });
        const { UserId, Role } = response.data;

        // localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({ UserId, Role }));

        setError('');

        if (Role === 'Admin') {
          navigate('/admin'); 
        } else {
          navigate('/'); 
        }
      } catch (error) {
        setError('Invalid email or password');
        console.error('Login failed', error.response ? error.response.data : error.message);
      }
    };  
  return (
    <div className='loginform'>
      <form onSubmit={handleSubmit}>
        <h2 className='logintitle'>Login</h2>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email</label>
    <input type="email" className="form-control" id="email"value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
   
  </div>
  <div className="mb-3">
    <label htmlfor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
  </div> */}
  <button type="submit" className="btnLog">Login</button>
  <p className='signup'>Didn't have account?<Link to={'/signup'}>Signup </Link></p>
  {error && <p>{error}</p>}
</form>
    </div>
  )
}

export default Login