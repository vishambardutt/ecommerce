import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Featured from '../../components/Featured'
import Footer from '../../components/Footer'
const Home = () => {
  const [products, setProducts] = useState();
  useEffect = (() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mb-1">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0 ? <Products products={products} />
          : <div>Loading.....</div>
      }
      <Products />

      <Featured />
      <Footer />
    </>
  )
}

export default Home