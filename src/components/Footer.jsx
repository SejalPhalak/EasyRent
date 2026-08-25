import React from 'react';

function Footer() {
  return (
    // simple dark footer using bootstrap classes
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; 2026 EasyRent. All rights reserved.</p>
        <p className="small text-secondary mb-0">Built by a passionate developer</p>
      </div>
    </footer>
  );
}

export default Footer;