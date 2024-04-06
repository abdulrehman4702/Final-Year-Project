// LoginPage.js
import "./LoginPage.css"; // Import your CSS file
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { loginCustomer } from "./services/client";

const LoginPage = () => {
  var customer = {
    username:"",
    password:""
  }

    const loginLogic=async(customer)=>{
      try {
        const response = await loginCustomer(customer);
      } catch (error) {
        console.log("Error logging in!")
      }
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
          
          onChange={(e) => e.target.value}
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
          onChange={(e) => e.target.value}
        />
      </div>
      <Link to="/form">
        <button onClick={loginCustomer(customer)}>Login</button>
      </Link>
      <a href="https://www.google.com/maps/@33.7029007,72.8397314,15z?entry=ttu">
        <button className="maps">Open Google Map</button>
      </a>
    </div>
  );
};

export default LoginPage;
