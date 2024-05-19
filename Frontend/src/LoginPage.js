// LoginPage.js
import "./LoginPage.css"; // Import your CSS file
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { loginCustomer } from "./services/client";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const loginLogic=async(customer)=>{
  //   try {
  //     const response = await loginCustomer(customer);
  //   } catch (error) {
  //     console.log("Error logging in!")
  //   }
  // };

  // Handle input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="form-group">
        <label className="login-label" htmlFor="username">
          Username:
        </label>
        <input
          className="login-input"
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label className="login-label-2" htmlFor="password">
          Password:
        </label>
        <input
          className="login-input-2"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Link to="/form">
        <button>Login</button> {/*  onClick={loginCustomer(customer)} */}
      </Link>
      <p>
        If you do not have an account, <Link to="/SignupPage">click here</Link>!
      </p>
      {/* <a href="https://www.google.com/maps/@33.7029007,72.8397314,15z?entry=ttu">
        <button className="maps">Open Google Map</button>
      </a> */}
    </div>
  );
};

export default LoginPage;
