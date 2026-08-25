import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

function PropertyCard({ id, title, location, price, image }) {
  return (
    <div className="card custom-card shadow-sm border-0">
      
      {/* Image Section */}
      <div>
        <img 
          src={image} 
          alt={title} 
          className="card-img-top" 
          style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} 
        />
      </div>
      
      {/* Details Section */}
      <div className="card-body mt-2">
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">📍 {location}</p>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          {/* इथून /mo काढून टाकलं आहे */}
          <h5 className="text-primary fw-bold mb-0">₹{price}</h5>
          
          <Link to={`/property/${id}`} className="btn btn-outline-primary btn-sm px-3 rounded-pill">
            View
          </Link>
        </div>
      </div>

    </div>
  );
}

export default PropertyCard;