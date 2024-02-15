// LoginPage.js
import "./LoginPage.css"; // Import your CSS file
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
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
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to="/form">
        <button onClick={handleLogin}>Login</button>
      </Link>
      <a href="https://www.google.com/maps/@33.7029007,72.8397314,15z?entry=ttu">
        <button className="maps">Open Google Map</button>
      </a>
    </div>
  );
};

export default LoginPage;
