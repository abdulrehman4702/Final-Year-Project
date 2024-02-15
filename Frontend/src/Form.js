// Form.js
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    potassium: "",
    pH_Value: "",

    temperature: "",
    NO3_N: "",
    phosphorus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formValues);
  };

  return (
    <div className="form-container">
      <h2>Input Page</h2>
      <form className="label-form" onSubmit={handleSubmit}>
        <label>
          Potassium:
          <input
            type="number"
            name="potassium"
            value={formValues.potassium}
            onChange={handleChange}
          />
        </label>

        <label>
          pH Value:
          <input
            type="number"
            name="pH_Value"
            value={formValues.pH_Value}
            onChange={handleChange}
          />
        </label>

        <label>
          Temperature:
          <input
            type="number"
            name="temperature"
            value={formValues.temperature}
            onChange={handleChange}
          />
        </label>

        <label>
          NO3_N:
          <input
            type="number"
            name="NO3_N"
            value={formValues.NO3_N}
            onChange={handleChange}
          />
        </label>

        <label>
          Phosphorus:
          <input
            type="number"
            name="phosphorus"
            value={formValues.phosphorus}
            onChange={handleChange}
          />
        </label>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
