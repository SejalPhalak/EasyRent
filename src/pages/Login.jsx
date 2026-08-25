import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          
          {/* bootstrap card for login form */}
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h3 className="fw-bold text-center mb-4">Login to EasyRent</h3>
            
            <form>
              {/* email input */}
              <div className="mb-3">
                <label className="form-label text-muted">Email address</label>
                <input type="email" className="form-control rounded-pill px-3" placeholder="Enter your email" />
              </div>
              
              {/* password input */}
              <div className="mb-3">
                <label className="form-label text-muted">Password</label>
                <input type="password" className="form-control rounded-pill px-3" placeholder="Enter your password" />
              </div>
              
              {/* submit button */}
              <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold mt-3">
                Login
              </button>
            </form>

            {/* link to signup page */}
            <div className="text-center mt-4">
              <p className="text-muted small">
                Don't have an account? <Link to="/signup" className="text-primary text-decoration-none fw-bold">Sign Up here</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;