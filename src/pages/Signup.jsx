import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check empty fields
    if (name === "" || email === "" || password === "") {
      alert("Please fill all the details to create an account!");
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check email already exists
    const userExists = existingUsers.some(
      (user) => user.email === email
    );

    if (userExists) {
      alert("Email already registered. Please login.");
      return;
    }

    // New user
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    // Add new user
    existingUsers.push(newUser);

    // Store users in localStorage
    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    );

    alert(`Account created successfully for ${name}! Please login.`);

    // Go to login
    navigate("/login");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow-sm border-0 rounded-4 p-4">

            <h3 className="fw-bold text-center mb-4">
              Create an Account
            </h3>

            <form onSubmit={handleSignup}>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-muted">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control rounded-pill px-3"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-muted">
                  Email address
                </label>

                <input
                  type="email"
                  className="form-control rounded-pill px-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label text-muted">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control rounded-pill px-3"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill fw-bold mt-3"
              >
                Sign Up
              </button>

            </form>

            <div className="text-center mt-4">
              <p className="text-muted small">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary text-decoration-none fw-bold"
                >
                  Login here
                </Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;