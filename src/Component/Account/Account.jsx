import React, { useState } from 'react';
import axios from 'axios';
import './Account.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setMessage('');

      try {
        if (isLogin) {
          await axios.post('http://localhost:5000/login', {
            email: formData.email,
            password: formData.password,
          });
          setMessage('Login successful!');
        } else {
          await axios.post('http://localhost:5000/signup', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });
          setMessage('Account created successfully! Please login.');
        }

        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        setErrors({ apiError: 'An error occurred. Please try again.' });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.password) errors.password = 'Password is required';
    if (!isLogin && data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    if (!isLogin && !data.name) errors.name = 'Name is required for signup';
    return errors;
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setErrors({});
  };

  return (
    <div className="account-container">
      <h2>{isLogin ? 'Login to Your Account' : 'Create Your Account'}</h2>
      <div className="form-switch">
        <button onClick={toggleForm} className={`tab-btn ${isLogin ? 'active' : ''}`}>
          Login
        </button>
        <button onClick={toggleForm} className={`tab-btn ${!isLogin ? 'active' : ''}`}>
          Signup
        </button>
      </div>

      {message && <p className="success-msg">{message}</p>}
      {errors.apiError && <p className="err">{errors.apiError}</p>}

      <form onSubmit={handleSubmit} className="account-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="err">{errors.name}</p>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="err">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="err">{errors.password}</p>}
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="err">{errors.confirmPassword}</p>}
          </div>
        )}

        <button type="submit" className={`submit-btn ${loading ? 'loading' : ''}`} disabled={loading}>
          {loading ? (isLogin ? 'Logging In...' : 'Creating Account...') : (isLogin ? 'Login' : 'Create Account')}
        </button>
      </form>
    </div>
  );
};

export default Account;
