import { useMemo, useState } from 'react'

const WithUseMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const result = useMemo(() => {
        console.log("Running expensive calculation...");
        return count * 2; // Heavy computation
    }, [count]); // Recalculating only when `count` changes

  return (
    <div>
        <h1>Result: {result}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <input
        type='text'
        placeholder='Type something...'
        value={text}
        onChange={(e) => {
            console.log("Input Value: ", e.target.value); // loging value here
            setText(e.target.value);
        }}
        />
    </div>
  )
}

export default WithUseMemo