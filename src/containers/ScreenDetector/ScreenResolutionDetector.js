import React, { useState, useEffect } from 'react';

function ScreenResolutionDetector() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Screen Resolution:</p>
      <p>Width: {screenWidth}px</p>
      <p>Height: {screenHeight}px</p>
    </div>
  );
}

export default ScreenResolutionDetector;
