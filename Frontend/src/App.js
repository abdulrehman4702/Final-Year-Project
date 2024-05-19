// App.js
import React from "react";
import Header from "./header";
import Footer from "./footer";
import ImageSlider from "./ImageSlider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Form from "./Form";
import UploadImagePage from "./UploadImagePage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/form" element={<Form />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/Upload" element={<UploadImagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
