import React, { useState, useEffect } from 'react';

function ResizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log('Window Resized:', window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event Listener removed');
    };
  }, []); 

  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
}

export default ResizeComponent;
