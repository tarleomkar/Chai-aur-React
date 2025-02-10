import UserContextProvider from "./context/UsercontextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

const App = () => {

  return (
    <UserContextProvider>
    <h1>React with Chai</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App