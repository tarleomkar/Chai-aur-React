import React, { useEffect, useState } from 'react';

const SimpleExample = () => {
  const [count, setCount] = useState(0);
// 
  useEffect(() => {
    if (count < 5) {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
}
  }, [count]); // Include `count` in the dependency array

  return (
    <div>
      <h1>I rendered {count} times</h1>
    </div>
  );
};

export default SimpleExample;
