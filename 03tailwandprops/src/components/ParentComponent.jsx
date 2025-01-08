import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from the parent!";
  
  return (
    <ChildComponent greeting={message} />
  );
}

export default ParentComponent;
