import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          
          {/* bootstrap card for signup form */}
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h3 className="fw-bold text-center mb-4">Create an Account</h3>
            
            <form>
              {/* full name input */}
              <div className="mb-3">
                <label className="form-label text-muted">Full Name</label>
                <input type="text" className="form-control rounded-pill px-3" placeholder="Enter your full name" />
              </div>

              {/* email input */}
              <div className="mb-3">
                <label className="form-label text-muted">Email address</label>
                <input type="email" className="form-control rounded-pill px-3" placeholder="Enter your email" />
              </div>
              
              {/* password input */}
              <div className="mb-3">
                <label className="form-label text-muted">Password</label>
                <input type="password" className="form-control rounded-pill px-3" placeholder="Create a strong password" />
              </div>
              
              {/* submit button */}
              <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold mt-3">
                Sign Up
              </button>
            </form>

            {/* link to login page */}
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