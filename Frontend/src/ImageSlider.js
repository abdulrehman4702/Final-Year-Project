import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./ImageSlider.css";
import TransparentBox from "./TransparentBox";

const ImageSlider = () => {
  const images = useMemo(() => ["image1.jpg", "image2.jpg", "image3.jpg"], []); // Memoize the images array

  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, [images]); // Include images in the dependency array

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        images.map(
          (image) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = image;
              img.onload = resolve;
            })
        )
      );
      setIsLoaded(true);
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isLoaded) {
        nextImage();
      }
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoaded, nextImage]); // Include nextImage in the dependency array

  return (
    <div className="slider-container">
      {isLoaded &&
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentImage ? "active" : ""}
          />
        ))}
      <TransparentBox />
    </div>
  );
};

export default ImageSlider;
