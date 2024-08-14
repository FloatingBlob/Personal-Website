import React, { useState, useEffect } from 'react';

// Function to preload images
const preloadImages = (imagePaths) => {
  return Promise.all(
    imagePaths.map((path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

const FrameAnimation = ({ frames, frameRate }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    preloadImages(frames)
      .then(() => {
        setIsLoaded(true); // All images are loaded
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
  }, [frames]);

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 1000 / frameRate);

    return () => clearInterval(interval); // Clean up on unmount
  }, [frames.length, frameRate, isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading indicator while images are preloading
  }

  return (
    <img
      src={frames[currentFrame]}
      alt={`frame ${currentFrame}`}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default FrameAnimation;
