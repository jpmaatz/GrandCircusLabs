import { useEffect, useState } from 'react'
import './App.css'
import { fetchProducts } from './services/productService'
import { Product } from './interfaces/Product'
import Cart from "./components/Cart"
import Header from "./components/Header"

const App = () => {
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    fetchProducts().then(p => setProducts(p))
  }, []),
  <>
    <Header />
    <Cart />
  </>

  return (
    <>
      <>products: {products === null ? "not working" : "working"}</>
    </>
  )
}

export default App
