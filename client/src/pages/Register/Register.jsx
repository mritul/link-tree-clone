import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  // States
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Functions to handle input fields
  const handleRegisterUsernameInput = (e) => {
    //Not letting the user enter a username with space in it
    // To achieve this we see if the last character of the e.target.value is a space
    if (e.target.value[e.target.value.length - 1] !== " ") {
      setRegisterUsername(e.target.value);
    }
  };

  const handleRegisterPasswordInput = (e) => {
    setRegisterPassword(e.target.value);
  };

  //Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterUsername("");
    setRegisterPassword("");
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}/register`,
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
      });
      console.log(response);
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className="Register">
      <div className="card-register">
        <h1>Register</h1>
        <div className="underline">-</div>
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              required
              type="text"
              minLength={5}
              name="username"
              value={registerUsername}
              onChange={handleRegisterUsernameInput}
              pattern="[a-z0-9]+"
              title="Username should be lowercase alphanumeric"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              required
              type="password"
              minLength={6}
              name="password"
              value={registerPassword}
              onChange={handleRegisterPasswordInput}
            />
          </div>
          <button className="btn register-submit-btn" onSubmit={handleSubmit}>
            Register
          </button>
          <p className="helper-msg">
            Already have an account ?{" "}
            <Link to="/login" className="link-text">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
