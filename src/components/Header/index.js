import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  const navigations = [{
    name:'HOME',
    path:'/'

  },
  {
    name:'PRODUCTS',
    path:'/Products'
  },
  {
    name:'ABOUT',
    path:'/About'
  },
  {
    name:'CONTACT',
    path:'/Contact'
  },
]
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
          {/* Logo SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-COMMERCE</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Navigation links */}
          {
            navigations.map((navigation)=>{
              return (
                <Link to={navigation.pth} className='mr-5 hover:text-grey-900'>{navigation.name}</Link>
              )
            })
          }
       
        </nav>
        {/* Cart button */}
        <button className="inline-flex items-center color-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-white mt-4 md:mt-0">CART
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
