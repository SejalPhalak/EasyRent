import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
          {/* Logo Fix: Removed width, added objectFit and mixBlendMode */}
          <img 
            src={logoImg} 
            alt="EasyRent Logo" 
            height="45" 
            className="me-2" 
            style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
          />
          Easy<span className="text-primary">Rent</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/properties">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary rounded-pill px-4 ms-2" to="/login">Login</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;