import React, { useState, useEffect } from 'react';

const FrameByFrameAnimation = ({ type }) => {
  const totalFrames = type === 'spinner' ? 101 : 85;
  const frameInterval = 41; // Time between frames in milliseconds

  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        const nextFrame = prevFrame + 1;
        return nextFrame > totalFrames ? 1 : nextFrame;
      });
    }, frameInterval);

    return () => clearInterval(timer);
  }, [totalFrames]);

  // Dynamically set the folder name based on the type (either 'blood' or 'spinner')
  const folderName = type === 'spinner' ? 'spinner' : 'blood';
  const imageUrl = `/button/${folderName}/frame${currentFrame.toString().padStart(3, '0')}.png`;

  return (
    <div>
      <img src={imageUrl} alt={`${type} frame ${currentFrame}`} />
    </div>
  );
};

export default FrameByFrameAnimation;