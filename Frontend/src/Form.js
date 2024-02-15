// Form.js
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    potassium: "",
    phValue: "",
    acidity: "",
    temperature: "",
    nitrogen: "",
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
            name="phValue"
            value={formValues.phValue}
            onChange={handleChange}
          />
        </label>

        <label>
          Acidity:
          <input
            type="number"
            name="acidity"
            value={formValues.acidity}
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
          Nitrogen:
          <input
            type="number"
            name="nitrogen"
            value={formValues.nitrogen}
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
