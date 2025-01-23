import MyExample from './components/MyExample'
import WithOutMemoization from './components/WithOutMemoizatio'
import WithUseMemo from './components/WithUseMemo'

const App = () => {
  return (
    <div>
      {/* <MyExample/> */}
      {/* <WithOutMemoization/> */}
      <WithUseMemo/>
    </div>
  )
}

export default App