import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="Navbar">
      <Link to="/">
        <h1>LinkFree</h1>
      </Link>
      <div className="btn-panel">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">
              <button className="btn btn-profile-nav">
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>
            <button className="btn btn-logout">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="btn btn-register">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-login">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
