import { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    
    // using useREf
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {
        console.log("Runnig expensive calculation...");
        let result = 0;
        for (let i = 0; i < 1000; i++) {
            result += i;
        }
        return result;
    }, [count]);

    useEffect(() => {
        if(previousFunction.current) {
            if (previousFunction.current === expensiveCalculation) {
                console.log("Function not re-created");
            } else {
                console.log("Function got re-created");
            }
        }else {
            previousFunction.current = expensiveCalculation;
        }
    }, [expensiveCalculation])

  return (
    <div>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here!"
        />
        <p>Expensive Calculation Result: 
            {expensiveCalculation()}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>count: {count}</p>
    </div>
  )
}

export default ExpensiveComponent