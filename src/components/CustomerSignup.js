import React, { useState } from 'react';
import axios from 'axios';

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    date_of_birth: '',
    city: '',
    state: '',
    country: '',
    nickname: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/signup/', {
        user: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        date_of_birth: formData.date_of_birth,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        nickname: formData.nickname,
      });
      console.log('Signup successful', response.data);
      // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
      console.error('Signup error', error.response.data);
      // Handle signup error (e.g., display error messages)
    }
  };

  return (
    <div className="container mt-5">
      <h2>Customer Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">Nickname</label>
          <input
            type="text"
            className="form-control"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default CustomerSignup;