import Chai from "./chai"

function App() {
  const userName = "Chau aur code";
  
  return (
  // <h1>Chai aur react with vite | Omi</h1>
  // SO we deletd above h1 tag but we can also inject multiple tags we need to use "Fragment" like = (<></>)
  <>
  <Chai/>
  {/* Evaluation Expression (Cannot write js and other code of js) */} 
  <h1>I am H1 {userName}</h1>
  <p>I am Para</p>
  </>
  )
}

export default App
