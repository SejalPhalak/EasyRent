import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import './Home.css';

import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';

function Home() {
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      alert("Please enter a location to search!");
    } else {
      alert(`Searching for properties near "${searchQuery}"... Redirecting to properties page.`);
      navigate('/properties');
    }
  };

  const properties = [
    { id: 1, title: "Skyline Studio", location: "College Road, Nashik", price: "18,000", image: house1 },
    { id: 2, title: "Tech Villa", location: "Gangapur Road, Nashik", price: "35,000", image: house2 },
    { id: 3, title: "Cozy Home", location: "Indira Nagar, Nashik", price: "14,500", image: house3 }
  ];

  return (
    <div>
      <div className="hero-box text-center">
        <h1 className="fw-bold text-dark">Find Your Dream Space</h1>
        <p className="text-muted mb-4">Verified rental properties in Nashik.</p>
        
        <div className="search-bar shadow-sm d-flex mx-auto bg-white p-2 rounded-pill">
          <input 
            type="text" 
            className="form-control border-0 shadow-none ps-3" 
            placeholder="Search location..." 
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-primary rounded-pill px-4">
            Search
          </button>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h3 className="fw-bold text-center mb-4">Trending Properties</h3>
        <div className="row g-4">
          {properties.map((p) => (
            <div className="col-md-4" key={p.id}>
              <PropertyCard 
                id={p.id}
                title={p.title} 
                location={p.location} 
                price={p.price} 
                image={p.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;