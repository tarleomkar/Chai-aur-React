import { useState } from "react"

const WithOutMemoization = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = () => {
        console.log("Running expensive calculation...");
        return count * 2; // imaging this is very heavy computation
    };

    const result = expensiveCalculation();

  return (
    <div>
        <h1>Result: {result}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <input
        type="text"
        placeholder="Type Something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
    </div>
  )
}

export default WithOutMemoization