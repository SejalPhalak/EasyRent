import React from 'react';
import { useParams, Link } from 'react-router-dom';

function PropertyDetails() {
  // get the property id from the url using useParams
  const { id } = useParams();

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        
        {/* left side: property images and description */}
        <div className="col-md-8">
          
          {/* placeholder for main property image */}
          <div className="rounded-4 w-100 mb-4 d-flex justify-content-center align-items-center" style={{ height: '400px', backgroundColor: '#e9ecef' }}>
            <h3 className="text-muted">Property Image Viewer (ID: {id})</h3>
          </div>
          
          <h2 className="fw-bold">Premium Property in Nashik</h2>
          <p className="text-muted fs-5">📍 Prime Location, Nashik, Maharashtra</p>
          
          <hr className="my-4" />
          
          <h4 className="fw-bold">Description</h4>
          <p className="text-muted">
            This is a beautiful and well-maintained property available for rent. 
            It includes all basic amenities, 24/7 water supply, and security. 
            Perfect for families or professionals looking for a peaceful stay.
          </p>
          
          <h4 className="fw-bold mt-4">Amenities</h4>
          <ul className="text-muted">
            <li>Fully Furnished</li>
            <li>Dedicated Parking Space</li>
            <li>24/7 Security and CCTV</li>
            <li>Nearby Markets and Schools</li>
          </ul>
        </div>

        {/* right side: booking card */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="card shadow-sm border-0 rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
            <h3 className="fw-bold text-primary">₹20,000 <span className="fs-6 text-muted">/ month</span></h3>
            <p className="text-muted mb-4">Available from next week</p>
            
            <button className="btn btn-primary w-100 rounded-pill fw-bold mb-3">Book Now</button>
            <button className="btn btn-outline-secondary w-100 rounded-pill fw-bold mb-4">Contact Owner</button>
            
            <Link to="/properties" className="text-decoration-none text-center d-block">
              &larr; Back to Properties
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;