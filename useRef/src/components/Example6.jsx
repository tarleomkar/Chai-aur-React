import { useEffect, useRef } from 'react'

const Example6 = () => {
    const count = useRef(0)

    useEffect(() => {
        console.log("The Component have been rendered");
    });

    const handle = () => {
        count.current = count.current + 1;
        console.log(`Clicked ${count.current } times`);
    }

  return (
    <div>
        <button onClick={handle}>Click Me</button>
    </div>
  )
}

export default Example6