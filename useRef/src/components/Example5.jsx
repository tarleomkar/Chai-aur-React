import React, { useEffect, useRef } from 'react';

const Example5 = () => {
  const inputEle = useRef(null);  // Create a ref for the input element

  function handleFocous() {
    inputEle.current.style.backgroundColor = 'black';
  }

  function handleBlur() {
    inputEle.current.style.backgroundColor = '';
  }

//   useEffect(() => {
//     inputEle.current.focus();  // Focus the input element on mount
//   }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <input ref={inputEle} onFocus={handleFocous} onBlur={handleBlur} type="text" />  {/* Attach the ref to the input element */}
    </div>
  );
}

export default Example5;
