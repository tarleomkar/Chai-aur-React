import { useEffect, useLayoutEffect, useState } from 'react'

const Example1 = () => {
  const [text, setText] = useState("Hello");

  useLayoutEffect(() => {
    console.log("🔄 useLayoutEffect runs BEFORE the DOM update!");
  }, [])

  useEffect(() => {
    console.log("🎨 useEffect runs AFTER the browser paints the update!");
  }, [])

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Updated text!")}>Update</button>
    </div>
  )
}

export default Example1