import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // simple bootstrap navbar with shadow
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        
        {/* logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Easy<span className="text-primary">Rent</span>
        </Link>

        {/* mobile menu button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* nav links */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* link to properties page */}
              <Link className="nav-link text-dark" to="/properties">Properties</Link>
            </li>
            <li className="nav-item">
              {/* link to about page */}
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary rounded-pill px-4">Login</button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;