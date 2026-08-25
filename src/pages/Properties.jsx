import React from 'react';
import PropertyCard from '../components/PropertyCard';

function Properties() {
  // larger array for the properties page
  const allProperties = [
    { id: 1, title: "Skyline Studio", location: "College Road, Nashik", price: "18,000", bgColor: "#FFD1DC" },
    { id: 2, title: "Tech Villa", location: "Gangapur Road, Nashik", price: "35,000", bgColor: "#B0E0E6" },
    { id: 3, title: "Cozy Home", location: "Indira Nagar, Nashik", price: "14,500", bgColor: "#E6E6FA" },
    { id: 4, title: "City Apartment", location: "City Centre, Nashik", price: "20,000", bgColor: "#FFE4E1" },
    { id: 5, title: "Green Park Flat", location: "Pathardi Phata, Nashik", price: "12,000", bgColor: "#F0FFF0" },
    { id: 6, title: "Luxury Duplex", location: "Mahatma Nagar, Nashik", price: "40,000", bgColor: "#FFF0F5" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-center">All Properties</h2>
      
      {/* grid for cards */}
      <div className="row g-4 mb-5">
        {/* loop through all properties using map */}
        {allProperties.map((p) => (
          <div className="col-md-4" key={p.id}>
            <PropertyCard 
              title={p.title} 
              location={p.location} 
              price={p.price} 
              bgColor={p.bgColor} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;