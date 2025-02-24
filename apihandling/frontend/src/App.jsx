import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const App = () => {

  const [products, error, loading] = customReactQuery('/api/products')

  if (error) {
    return <h1>Something went wrong</h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <h1>Chai aur API/Axios in react</h1>
    <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath)
        console.log(response.data);    
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    })()

  }, [])

  return [products, error, loading]
}