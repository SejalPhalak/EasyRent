import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {

  // 1️⃣ हे ref
  const navbarRef = useRef(null);

  // 2️⃣ हा closeNavbar function
  const closeNavbar = () => {
    const navbar = navbarRef.current;

    if (navbar) {
      const collapse =
        window.bootstrap?.Collapse.getOrCreateInstance(navbar);

      collapse.hide();
    }
  };

  // 3️⃣ इथून return सुरू
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold fs-4 d-flex align-items-center"
          to="/"
          onClick={closeNavbar}
        >
          <img
            src={logoImg}
            alt="EasyRent Logo"
            height="45"
            className="me-2"
            style={{
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />

          <span className="brand-text">
            Easy<span className="text-primary">Rent</span>
          </span>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div
          ref={navbarRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link custom-link fw-semibold px-3"
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>

            {/* Properties */}
            <li className="nav-item">
              <Link
                className="nav-link custom-link fw-semibold px-3"
                to="/properties"
                onClick={closeNavbar}
              >
                Properties
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link
                className="nav-link custom-link fw-semibold px-3"
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>

            {/* Login */}
            <li className="nav-item">
              <Link
                className="btn btn-primary rounded-pill px-4 login-btn ms-lg-2 mt-2 mt-lg-0"
                to="/login"
                onClick={closeNavbar}
              >
                Login
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;