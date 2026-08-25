import React from 'react';
import aboutImg from '../assets/about-image.jpg'; // Importing the about image

function About() {
  
  const handleContactUs = () => {
    alert("Thank you for reaching out!\n\nEmail: support@easyrent.com\nPhone: +91 88888 99999");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        
        {/* Text Section */}
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
          
          <button onClick={handleContactUs} className="btn btn-primary rounded-pill px-4 mt-3">
            Contact Us
          </button>
        </div>
        
        {/* Image Section */}
        <div className="col-md-6 mt-4 mt-md-0 text-center">
          <img 
            src={aboutImg} 
            alt="About EasyRent Office" 
            className="img-fluid rounded-4 shadow-sm" 
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
        </div>

      </div>
    </div>
  );
}

export default About;