import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  // useState hooks for handling input fields
  //Login form
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // useEffect to redirect if logged in
  useEffect(() => {
    if (auth.user) {
      navigate("/admin");
    }
  }, [auth.user]);

  // Handling Input fields
  const handleUsernameInput = (e) => {
    setLoginUsername(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setLoginPassword(e.target.value);
  };

  // Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    auth.login(loginUsername, loginPassword);
  };
  return (
    <div className="Login">
      <form id="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="underline">-</div>
        <input
          type="text"
          required
          placeholder="Enter your username"
          value={loginUsername}
          onChange={handleUsernameInput}
        />
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={loginPassword}
          onChange={handlePasswordInput}
        />
        <button className="btn login-submit-btn">Login</button>
        <p className="helper-msg">
          Don't have an account ?{" "}
          <Link to="/register" className="link-text">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
