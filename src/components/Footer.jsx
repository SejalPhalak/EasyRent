import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Column 1: Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-white mb-3">
              Easy<span className="text-primary">Rent</span>
            </h4>
            {/* Changed text-muted to text-white-50 so it is clearly visible */}
            <p className="text-white-50 small pe-4">
              Your trusted platform to find premium and verified rental properties in Nashik. 
              Skip the broker and find your dream space easily.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              {/* Updated links to text-white-50 */}
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/properties" className="text-white-50 text-decoration-none">Properties</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/login" className="text-white-50 text-decoration-none">Login / Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Information (Now fully working with links) */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white mb-3">Contact Us</h5>
            <ul className="list-unstyled footer-links small">
              <li className="mb-3">
                {/* Google Maps Link */}
                <a href="https://maps.google.com/?q=College+Road,+Nashik,+Maharashtra" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">
                  📍 College Road, Nashik, Maharashtra 422005
                </a>
              </li>
              <li className="mb-3">
                {/* Phone Link */}
                <a href="tel:+918888899999" className="text-white-50 text-decoration-none">
                  📞 +91 88888 99999
                </a>
              </li>
              <li className="mb-3">
                {/* Email Link */}
                <a href="mailto:support@easyrent.com" className="text-white-50 text-decoration-none">
                  ✉️ support@easyrent.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom Bar with your name */}
        <div className="border-top border-secondary pt-3 mt-3 text-center">
          <p className="text-white-50 small mb-0">
            &copy; 2026 EasyRent. All rights reserved. Built by Sejal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;