import React from 'react';

const AlertButton = () => {
  const handleClick = () => alert('Button clicked!');
  
  return <button onClick={handleClick}>Click Me</button>;
};

export default AlertButton;
