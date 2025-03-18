// // src/components/Account.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Account.css'; // Assuming you have already written your styles

// const Account = () => {
//   const [isLogin, setIsLogin] = useState(true); // To toggle between login/signup
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false); // For loading state
//   const [message, setMessage] = useState(''); // To show success/error message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       setLoading(true);
//       setMessage('');

//       try {
//         if (isLogin) {
//           // Login Request
//           const response = await axios.post('http://localhost:5000/login', {
//             email: formData.email,
//             password: formData.password,
//           });
//           setMessage('Login successful!');
//         } else {
//           // Signup Request
//           const response = await axios.post('http://localhost:5000/signup', {
//             name: formData.name,
//             email: formData.email,
//             password: formData.password,
//           });
//           setMessage('Account created successfully! Please login.');
//         }

//         // Reset form after successful submission
//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//           confirmPassword: ''
//         });
//       } catch (error) {
//         setErrors({ apiError: 'An error occurred. Please try again.' });
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validate = (data) => {
//     const errors = {};
//     if (!data.email) errors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
//     if (!data.password) errors.password = 'Password is required';
//     if (!isLogin && data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match';
//     if (!isLogin && !data.name) errors.name = 'Name is required for signup';
//     return errors;
//   };

//   const toggleForm = () => {
//     setIsLogin((prev) => !prev); // Toggle between login and signup
//     setErrors({}); // Reset errors when toggling forms
//   };

//   return (
//     <div className="account-container">
//       <div className="tab-buttons">
//         <button onClick={toggleForm} className={`tab-btn ${isLogin ? 'active' : ''}`}>
//           Login
//         </button>
//         <button onClick={toggleForm} className={`tab-btn ${!isLogin ? 'active' : ''}`}>
//           Signup
//         </button>
//       </div>

//       {message && <p className="success-message">{message}</p>}
//       {errors.apiError && <p className="error">{errors.apiError}</p>}

//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>
//         )}

//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//           />
//           {errors.password && <p className="error">{errors.password}</p>}
//         </div>

//         {!isLogin && (
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//             />
//             {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//           </div>
//         )}

//         <button type="submit" className="submit-btn" disabled={loading}>
//           {loading ? (isLogin ? 'Logging In...' : 'Creating Account...') : (isLogin ? 'Login' : 'Create Account')}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Account;
