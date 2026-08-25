import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';

// Importing all 6 images from assets folder
import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';
import house5 from '../assets/house5.jpg';
import house6 from '../assets/house6.jpg';

function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Property list with local images
  const allProperties = [
    { id: 1, title: "Skyline Studio", location: "College Road, Nashik", price: "18,000", image: house1 },
    { id: 2, title: "Tech Villa", location: "Gangapur Road, Nashik", price: "35,000", image: house2 },
    { id: 3, title: "Cozy Home", location: "Indira Nagar, Nashik", price: "14,500", image: house3 },
    { id: 4, title: "City Apartment", location: "City Centre, Nashik", price: "20,000", image: house4 },
    { id: 5, title: "Green Park Flat", location: "Pathardi Phata, Nashik", price: "12,000", image: house5 },
    { id: 6, title: "Luxury Duplex", location: "Mahatma Nagar, Nashik", price: "40,000", image: house6 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1-second loading simulation
    return () => clearTimeout(timer);
  }, []);

  const filteredProperties = allProperties.filter((property) => {
    return property.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
           property.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-center">All Properties</h2>
      
      {/* Search Bar */}
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
      
      {/* Property Cards Grid */}
      <div className="row g-4 mb-5">
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
                image={p.image} /* Passing the imported image */
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