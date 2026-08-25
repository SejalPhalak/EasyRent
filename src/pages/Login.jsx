import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Check empty fields
    if (email === "" || password === "") {
      alert("Please fill all the fields!");
      return;
    }

    // 2. Get users from localStorage
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // 3. Find matching user
    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    // 4. If user not found
    if (!user) {
      alert("Invalid email or password!");
      return;
    }

    // 5. Store logged-in user
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    // 6. Success
    alert(`Welcome ${user.name}!`);

    // 7. Redirect to Home
    navigate("/");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow-sm border-0 rounded-4 p-4">

            <h3 className="fw-bold text-center mb-4">
              Login to EasyRent
            </h3>

            <form onSubmit={handleLogin}>

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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill fw-bold mt-3"
              >
                Login
              </button>

            </form>

            <div className="text-center mt-4">
              <p className="text-muted small">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary text-decoration-none fw-bold"
                >
                  Sign Up here
                </Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;