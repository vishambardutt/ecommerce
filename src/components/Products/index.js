import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -s-4">
          {products.map((product) => {
            console.log(product, 'products');
            const { id, title, price, category, image } = product;
            return (
              <div key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 p-4 cursor-pointer">
                <Link to={`/products/${id}`} className="block relative h-48 rounded overflow-hidden">
                  <img alt={title} className="object-cover object-center w-full h-full block" src={image} />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                  <p className="mt-1 font-bold">₹{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
