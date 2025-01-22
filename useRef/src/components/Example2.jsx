import React, { useEffect, useRef, useState } from "react";

const Example2 = () => {
  // use case A
  let val = useRef(0);

  // use case B = chaging the button color
  let btnRef = useRef();

  const [count, setCount] = useState(0);

  function handleIncrement() {
    val.current += 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }

  // it runs on every render
  useEffect(() => {
    console.log("main ferse render hogya hu");
  });

  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>

      <br />

      <button onClick={changeColor}>Change Color of 1st Button</button>

      <br />

      <div>Count: {count}</div>
      <br />
    </div>
  );
};

export default Example2;
