import React from 'react';

function About() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        
        {/* left side text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About EasyRent</h2>
          <p className="text-muted">
            Finding a rental property can be difficult and time-consuming. 
            At EasyRent, we simplify the process by connecting you directly 
            with verified property owners in Nashik.
          </p>
          <p className="text-muted">
            Our platform is built with a focus on user experience, transparency, 
            and trust. Whether you are looking for a cozy studio or a luxury villa, 
            we have the perfect space for you.
          </p>
          <button className="btn btn-primary rounded-pill px-4 mt-3">Contact Us</button>
        </div>
        
        {/* right side visual box (placeholder for image) */}
        <div className="col-md-6 mt-4 mt-md-0">
          <div 
            className="rounded-4 shadow-sm w-100 d-flex justify-content-center align-items-center" 
            style={{ height: '300px', backgroundColor: '#e9ecef' }}
          >
            <h4 className="text-secondary">EasyRent Headquarters</h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;