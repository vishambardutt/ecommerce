import React, { useState, useEffect } from "react";
import Products from '../../components/Products';
import Hero from '../../components/Hero';
import Featured from "../../components/Featured";
import StatCard from '../../components/StatCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Perform error handling logic here
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900"> PRODUCTS</h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className="sm:text-3xl text-2xl font-medium title-font text-gray-300 text-center">
          Loading...
        </div>
      )}
      <Featured />
      <StatCard/>
    </>
  );
};

export default Home;
