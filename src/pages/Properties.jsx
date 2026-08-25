import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';

function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // state to handle loading effect
  const [isLoading, setIsLoading] = useState(true);

  const allProperties = [
    { id: 1, title: "Skyline Studio", location: "College Road, Nashik", price: "18,000", bgColor: "#FFD1DC" },
    { id: 2, title: "Tech Villa", location: "Gangapur Road, Nashik", price: "35,000", bgColor: "#B0E0E6" },
    { id: 3, title: "Cozy Home", location: "Indira Nagar, Nashik", price: "14,500", bgColor: "#E6E6FA" },
    { id: 4, title: "City Apartment", location: "City Centre, Nashik", price: "20,000", bgColor: "#FFE4E1" },
    { id: 5, title: "Green Park Flat", location: "Pathardi Phata, Nashik", price: "12,000", bgColor: "#F0FFF0" },
    { id: 6, title: "Luxury Duplex", location: "Mahatma Nagar, Nashik", price: "40,000", bgColor: "#FFF0F5" }
  ];

  // using useEffect to simulate API data fetching delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // stop loading after 1 second
      setIsLoading(false);
    }, 1000);

    // cleanup function
    return () => clearTimeout(timer);
  }, []);

  const filteredProperties = allProperties.filter((property) => {
    return property.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
           property.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-center">All Properties</h2>
      
      {/* search bar section */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control rounded-pill px-4 py-2 shadow-sm" 
            placeholder="Search by location or title (e.g. Gangapur)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* grid for filtered cards or loading spinner */}
      <div className="row g-4 mb-5">
        
        {/* conditional rendering based on loading state */}
        {isLoading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 text-muted">Fetching properties...</p>
          </div>
        ) : filteredProperties.length > 0 ? (
          filteredProperties.map((p) => (
            <div className="col-md-4" key={p.id}>
              <PropertyCard 
                id={p.id}
                title={p.title} 
                location={p.location} 
                price={p.price} 
                bgColor={p.bgColor} 
              />
            </div>
          ))
        ) : (
          <div className="text-center text-muted mt-4">
            <h4>No properties found for "{searchTerm}"</h4>
            <p>Try searching for a different location like "College Road".</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Properties;