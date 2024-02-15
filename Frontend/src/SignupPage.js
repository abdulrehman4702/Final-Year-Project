// SignupPage.js
import React, { useState } from "react";
import "./SignupPage.css";
const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [passwordCriteria, setPasswordCriteria] = useState({
    hasLowercase: false,
    hasUppercase: false,
    hasDigit: false,
    hasSpecialChar: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update password criteria dynamically
    updatePasswordCriteria(value);
  };
  const updatePasswordCriteria = (password) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[@$!%*?&]/;
    setPasswordCriteria({
      hasLowercase: lowercaseRegex.test(password),
      hasUppercase: uppercaseRegex.test(password),
      hasDigit: digitRegex.test(password),
      hasSpecialChar: specialCharRegex.test(password),
    });
  };
  const handleSignup = () => {
    // Check if the password meets the strong password criteria
    if (
      !passwordCriteria.hasLowercase ||
      !passwordCriteria.hasUppercase ||
      !passwordCriteria.hasDigit ||
      !passwordCriteria.hasSpecialChar
    ) {
      console.log("Password must meet all criteria.");
      return;
    }

    console.log("Form data submitted:", formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup">Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="signup-input"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="signup-input"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="signup-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="signup-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Re-type Password:</label>
          <input
            className="signup-input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="password-criteria">
            <div>
              <input
                className="signup-input"
                type="checkbox"
                checked={passwordCriteria.hasLowercase}
                readOnly
              />
              <label>Lowercase</label>
            </div>
            <div>
              <input
                className="signup-input"
                type="checkbox"
                checked={passwordCriteria.hasUppercase}
                readOnly
              />
              <label>Uppercase</label>
            </div>
            <div>
              <input
                className="signup-input"
                type="checkbox"
                checked={passwordCriteria.hasDigit}
                readOnly
              />
              <label>Numeric</label>
            </div>
            <div>
              <input
                className="signup-input"
                type="checkbox"
                checked={passwordCriteria.hasSpecialChar}
                readOnly
              />
              <label>Special Character</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="otp">Phone No:</label>
          <input
            className="signup-input"
            type="text"
            id="num"
            name="num"
            value={formData.otp}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
  <label htmlFor="otp">OTP:</label>
  <div className="input-with-verify">
    <input
      className="signup-input"
      type="text"
      id="otp"
      name="otp"
      value={formData.otp}
      onChange={handleChange}
    />
    
  </div>
</div>


        <button className="signup-button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
