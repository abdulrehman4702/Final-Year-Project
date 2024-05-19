import "./Form.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CropPredictionForm = () => {
  const [formData, setFormData] = useState({
    pH: "",
    K: "",
    OM: "",
    EC: "",
    P: "",
    N: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/predict",
        new URLSearchParams(formData).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError("Error submitting form");
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>pH:</label>
          <input
            type="number"
            name="pH"
            value={formData.pH}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>K:</label>
          <input
            type="number"
            name="K"
            value={formData.K}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>OM:</label>
          <input
            type="number"
            name="OM"
            value={formData.OM}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>EC:</label>
          <input
            type="number"
            name="EC"
            value={formData.EC}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>P:</label>
          <input
            type="number"
            name="P"
            value={formData.P}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>N:</label>
          <input
            type="number"
            name="N"
            value={formData.N}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <h3>Result:</h3>
          <p>{result.message}</p>
          <p>Predicted Crop: {result.predicted_crop}</p>
        </div>
      )}
      <p>
        Upload piccc <Link to="/upload">click here</Link>!
      </p>
    </div>
  );
};

export default CropPredictionForm;
