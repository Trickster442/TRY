import React, { useState } from 'react';
import '../styles/login.css';
import api from '../api/configuration'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await api.post("users/authenticate", { email, password });
      console.log(response.data);
      if (response.data.token){
        localStorage.setItem('token', response.data.token)
      }
      navigate('/'); // Adjust the path as needed
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your email and password and try again.');
    }
  };

  return (
    <div className='main-container'>
    <div className='container'>
      <div className='second-container'>
        <form method='post' onSubmit={handleSubmit}>
          <h2>User Login</h2>

          {error && <p className='error'>{error}</p>} {/* Display error message if exists */}

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            required // Add required attribute for basic validation
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            required // Add required attribute for basic validation
          />

          <button type='submit'>Login</button>
        </form>

        <a href='/forgot-password' className='forgotPassword'>Forgot password?</a> {/* Updated link */}
        <div className='line'></div>
        <div className='newAccount'>
          <p>Don't have an account? <a href='/signup'>Create new</a></p> {/* Updated link */}
        </div>
      </div>
    </div>
</div>
  );
};


export default Login;
