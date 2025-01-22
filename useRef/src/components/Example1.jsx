import React, { useRef, useState } from 'react'

const Example1 = () => {
    const currentRef = useRef(0);
    const [count, setCount] = useState(0);

    const increment = () => {
        currentRef.current += 1;
        setCount(count + 1);
        console.log("Current Ref: ", currentRef.current, "State: ", count);
    }

  return (
    <div>
        <p>Current Ref: {currentRef.current}</p>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment Me 😁</button>
    </div>
  )
}

export default Example1