// Header.js
import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Footer from "./footer";
import "./App.css";
import "./ImageSlider.css";
import "./TransparentBox.css";
import "./LoginButton.css";
import "./SignupButton.css";
function Header() {
  return (
    <>
      {" "}
      <h1 className="heading">Computer Vision Based Agriculture System</h1>
      <ImageSlider /> {/* Include the ImageSlider component here */}
      <Footer />
      <div className="justify">
        <Link to="/LoginPage">
          {" "}
          {/* Link to the /login route */}
          <button className="Loginbutton">Login</button>
        </Link>
        <Link to="/SignupPage">
          {" "}
          {/* Link to the /login route */}
          <button className="Signupbutton">Signup</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
