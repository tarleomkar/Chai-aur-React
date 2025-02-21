📌 useLayoutEffect Hook – What, Why & When?
👀 Short Answer:

It works just like useEffect, but it runs synchronously after DOM mutations (before the browser paints).
Use it when you need to measure or manipulate the DOM before the browser updates the screen.

🚀 Syntax
```
import { useLayoutEffect, useEffect, useState } from "react";

const Example = () => {
  const [text, setText] = useState("Hello");

  useLayoutEffect(() => {
    console.log("🔄 useLayoutEffect runs BEFORE the DOM update!");
  });

  useEffect(() => {
    console.log("🎨 useEffect runs AFTER the browser paints the update!");
  });

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Updated Text!")}>Update</button>
    </div>
  );
};

export default Example;
```

⚡ What’s the Difference Between useEffect and useLayoutEffect?
Hook
useEffect =>	After the DOM update & paint 
Use Case: API calls, event listeners

useLayoutEffect => Before the DOM paint but after changes 🔄
Use Case: DOM measurements, animations, synchronizing layouts

🛠 When Should You Use useLayoutEffect?
✅ When you need to measure the DOM size/position before the browser paints.
✅ When dealing with animations or layout shifts.
✅ When you need to avoid flickering/glitches (e.g., hiding UI before an update).

