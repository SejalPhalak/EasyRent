import React from 'react';
import './PropertyCard.css';

function PropertyCard({ title, location, price, bgColor }) {
  return (
    // bootstrap card
    <div className="card custom-card shadow-sm border-0">
      
      {/* card image placeholder with dynamic color */}
      <div className="card-img-top property-bg" style={{ backgroundColor: bgColor }}>
        <span className="badge bg-light text-dark m-3">Verified</span>
      </div>
      
      {/* card details */}
      <div className="card-body mt-2">
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">📍 {location}</p>
        
        {/* price and button row */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="text-primary fw-bold mb-0">₹{price}<span className="fs-6 text-muted">/mo</span></h5>
          <button className="btn btn-outline-primary btn-sm px-3 rounded-pill">View</button>
        </div>
      </div>

    </div>
  );
}

export default PropertyCard;