import { useEffect, useRef, useState } from 'react'

const Example4 = () => {
    // to view in browser
    // const reference = useRef(5);
    // console.log(reference);

    const [userInput, setUserInput] = useState("");

    // creates infinite numbers of renders because of the re-renders
    // const [renders , setRender] = useState(0);
    // Solution: 
    const renders = useRef(0);


    useEffect(() => {
        // setRender(renders + 1)
        renders.current = renders.current + 1;
    })
    
  return (
    <div>
        <input value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <p>The Component rendered {renders.current} times</p>
    </div>
  )
}

export default Example4