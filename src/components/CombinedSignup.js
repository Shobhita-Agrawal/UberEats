import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CombinedSignup = () => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // Add other fields as needed for both customer and restaurant
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/${userType}-signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        // Handle errors (e.g., show error message to user)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="restaurant">Restaurant</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {/* Add other fields as needed */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default CombinedSignup;