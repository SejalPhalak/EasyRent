import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  // state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  // function to handle signup
  const handleSignup = (e) => {
    e.preventDefault(); 
    
    // check if fields are empty
    if(name === '' || email === '' || password === '') {
      alert("Please fill all the details to create an account!");
      return;
    }

    // success message and redirect to login page
    alert(`Account created successfully for ${name}! Please login.`);
    navigate('/login');
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h3 className="fw-bold text-center mb-4">Create an Account</h3>
            
            {/* added onSubmit event */}
            <form onSubmit={handleSignup}>
              
              <div className="mb-3">
                <label className="form-label text-muted">Full Name</label>
                <input 
                  type="text" 
                  className="form-control rounded-pill px-3" 
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-muted">Email address</label>
                <input 
                  type="email" 
                  className="form-control rounded-pill px-3" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label text-muted">Password</label>
                <input 
                  type="password" 
                  className="form-control rounded-pill px-3" 
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold mt-3">
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-muted small">
                Already have an account? <Link to="/login" className="text-primary text-decoration-none fw-bold">Login here</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;