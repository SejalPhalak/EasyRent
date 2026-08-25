import React, { useRef, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import './Home.css';

function Home() {
  // using useRef to directly target the search input DOM element
  const searchInputRef = useRef(null);

  // using useEffect to run code when the component mounts
  useEffect(() => {
    // automatically focus the search bar when home page loads
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []); // empty dependency array means it runs only once

  // array for property list
  const properties = [
    { id: 1, title: "Skyline Studio", location: "College Road, Nashik", price: "18,000", bgColor: "#FFD1DC" },
    { id: 2, title: "Tech Villa", location: "Gangapur Road, Nashik", price: "35,000", bgColor: "#B0E0E6" },
    { id: 3, title: "Cozy Home", location: "Indira Nagar, Nashik", price: "14,500", bgColor: "#E6E6FA" }
  ];

  return (
    <div>
      {/* hero section */}
      <div className="hero-box text-center">
        <h1 className="fw-bold text-dark">Find Your Dream Space</h1>
        <p className="text-muted mb-4">Verified rental properties in Nashik.</p>
        
        {/* search box */}
        <div className="search-bar shadow-sm d-flex mx-auto bg-white p-2 rounded-pill">
          <input 
            type="text" 
            className="form-control border-0 shadow-none ps-3" 
            placeholder="Search location..." 
            ref={searchInputRef} /* attached the ref here */
          />
          <button className="btn btn-primary rounded-pill px-4">Search</button>
        </div>
      </div>

      {/* properties list */}
      <div className="container mt-5 mb-5">
        <h3 className="fw-bold text-center mb-4">Trending Properties</h3>
        
        {/* bootstrap grid */}
        <div className="row g-4">
          {/* rendering cards using map */}
          {properties.map((p) => (
            <div className="col-md-4" key={p.id}>
              <PropertyCard 
                id={p.id}
                title={p.title} 
                location={p.location} 
                price={p.price} 
                bgColor={p.bgColor} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;