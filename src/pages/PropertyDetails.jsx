import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';
import house5 from '../assets/house5.jpg';
import house6 from '../assets/house6.jpg';

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getImage = (propertyId) => {
    if (propertyId === '1') return house1;
    if (propertyId === '2') return house2;
    if (propertyId === '3') return house3;
    if (propertyId === '4') return house4;
    if (propertyId === '5') return house5;
    if (propertyId === '6') return house6;
    return house1; 
  };

  const handleBooking = () => {
    alert(`Congratulations! Booking initiated for Property ID: ${id}. Our team will contact you shortly.`);
    navigate('/'); 
  };

  const handleContactOwner = () => {
    alert("Owner Details:\n\nName: Amit Patil\nPhone: +91 9876543210\nEmail: amit.owner@easyrent.com");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        
        {/* Left Side: Property Image & Description */}
        <div className="col-md-8">
          
          <img 
            src={getImage(id)} 
            alt={`Property ${id}`} 
            className="img-fluid rounded-4 w-100 mb-4 shadow-sm" 
            style={{ height: '400px', objectFit: 'cover' }}
          />
          
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

        {/* Right Side: Booking Card */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="card shadow-sm border-0 rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
            <h3 className="fw-bold text-primary">Check Details <span className="fs-6 text-muted">for pricing</span></h3>
            <p className="text-muted mb-4">Available from next week</p>
            
            <button onClick={handleBooking} className="btn btn-primary w-100 rounded-pill fw-bold mb-3">
              Book Now
            </button>
            <button onClick={handleContactOwner} className="btn btn-outline-secondary w-100 rounded-pill fw-bold mb-4">
              Contact Owner
            </button>
            
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