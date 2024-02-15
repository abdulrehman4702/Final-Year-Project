// src/TransparentBox.js
import React from "react";
import "./TransparentBox.css";

function TransparentBox() {
  return (
    <>
      <div className="transparent-box">
        <p>
          <span style={{ fontWeight: "bold", color: "yellow" }}>
            SOIL TYPE CLASSIFICATION AND CROP SUGGESTION
          </span>
          <br />
          Approaching modern technology to help Farmers to increase
          productivity. This App classifies the type of the soil from input
          image. Based on the type, it will suggest crops that can be taken in
          that type of soil.
        </p>
      </div>
    </>
  );
}

export default TransparentBox;
