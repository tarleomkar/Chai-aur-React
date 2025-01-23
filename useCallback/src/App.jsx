import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

// code for component name = ChildComponents
// function App() {
//   const [count, setCount] = useState(0);

//   // function handleClick() {
//   //   setCount(count + 1);
//   // }

//   // adding the useCallback logic
//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count])

//   return (
//     <>
//     <div>
//       Count: {count}  
//     </div>    
//     <div>
//       <button onClick={handleClick}>
//         Increment
//       </button>
//     </div>
//     <div>
//       <ChildComponents 
//       buttonName="Click Me"
//       handleClick={handleClick}
//       />
//     </div>
//     </>
//   )
// }

// export default App

const App = () => {
  return (
    <div>
      <ExpensiveComponent/>
    </div>
  )
}

export default App;
