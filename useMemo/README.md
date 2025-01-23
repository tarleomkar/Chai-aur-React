
What is useMemo in React?
useMemo is a React Hook that allows you to optimize the performance of your application by memoizing the result of a computation. It recalculates the result only when its dependencies change, avoiding unnecessary computations during re-renders.

Syntax
const memoizedValue = useMemo(() => {
    // Perform expensive calculation or computation
    return result;
}, [dependency1, dependency2, ...]);
useMemo Parameters:

Callback function (()=>{}): The function that contains the logic for the computation.
Dependency array ([dep1, dep2, ...]): Tells React when to re-run the callback and recalculate the value.
Return Value:

Returns the memoized value. This value will only change if one or more dependencies in the array change.
Use Cases for useMemo
1. Optimizing Expensive Calculations
When you have a heavy computation that you don't want to run on every render unless required.

import React, { useState, useMemo } from "react";

const ExpensiveCalc = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return count * 1000000; // Pretend this is expensive
  }, [count]);

  return (
    <div>
      <h1>Result: {expensiveResult}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ExpensiveCalc;
Why useMemo?
The calculation (count * 1000000) only runs when count changes, not when typing in the input box.
2. Avoiding Recalculation of Derived Data
For example, when working with filtered or sorted arrays:

const FilteredList = ({ items, searchTerm }) => {
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
Why useMemo?
The filtering runs only when items or searchTerm changes, avoiding redundant work.
3. Optimizing Component Re-renders
When passing props to child components that don’t need to change unless specific values change.

const Parent = () => {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => ({ count }), [count]);

  return <Child value={memoizedValue} />;
};

const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <h1>Count: {value.count}</h1>;
});

Why useMemo?
The Child component won’t re-render unless count changes, because memoizedValue is memoized.
When to Use useMemo?
Use useMemo for expensive calculations or computations that don’t need to run on every render.
Don’t overuse it! Avoid adding useMemo around trivial or lightweight calculations—it adds complexity without much benefit.
Key Points
useMemo optimizes performance, not functionality. The output remains the same with or without it.
Only wrap expensive operations like filtering, sorting, or complex mathematical operations.
Use it when a computation’s result depends on specific state or props that don’t change frequently.
Common Mistakes
Overusing useMemo:
Avoid wrapping every small calculation unnecessarily—it could make your code harder to read without meaningful performance gains.

Forgetting Dependency Array:
Without the dependency array, the computation will run on every render, defeating the purpose of useMemo.

TL;DR
useMemo = "Remember this value unless something important changes." Use it to make your app faster when dealing with heavy calculations or derived data! 🚀