import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/products')
      console.log(response.data);    
    })()

  }, [])

  return (
    <>
    <h1>Chai aur API/Axios in react</h1>
    <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App