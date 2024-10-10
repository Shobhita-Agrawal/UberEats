import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CustomerSignup from './components/CustomerSignup';
import RestaurantSignup from './components/RestaurantSignup';
import Home from './components/Home';
import CustomerDashboard from './components/CustomerDashboard';
import RestaurantDashboard from './components/RestaurantDashboard';
import CombinedSignup from './components/CombinedSignup';
//import Login from './components/Login';

import Login from './components/Login'; // You'll need to create this component
import ProtectedRoute from './components/ProtectedRoute'; // Import your ProtectedRoute


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 


  useEffect(() => {
    // Check local storage for an auth token to set the initial authentication state
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear the token and reset authentication state
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };





  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">UberEats Prototype</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/customer-signup">Customer Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/restaurant-signup">Restaurant Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Combined Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                {/* Add more nav items here as needed */}
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<CombinedSignup />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
          <Route path="/restaurant-signup" element={<RestaurantSignup />} />
          
          {/* Add more routes here as needed */}

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/customer-dashboard" element={<CustomerDashboard />} />
              <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
            </Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

// Simple Home component
// const Home = () => (
//   <div>
//     <h1>Welcome to UberEats Prototype</h1>
//     <p>Choose an option to get started:</p>
//     <div className="d-flex justify-content-center">
//       <Link to="/customer-signup" className="btn btn-primary me-2">Customer Signup</Link>
//       <Link to="/restaurant-signup" className="btn btn-secondary">Restaurant Signup</Link>
//       <Link to="/signup" className="btn btn-info me-2">Combined Signup</Link>
//       <Link to="/login" className="btn btn-success">Login</Link>
   
//     </div>
//   </div>
// );

export default App;