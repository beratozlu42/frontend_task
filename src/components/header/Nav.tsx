import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegCircleUser } from "react-icons/fa6";

const NavLinks = () => {
  return (
    <>
      <NavLink to='/' className="text-lg font-bold text-red-400 hover:text-red-300 underline">Home</NavLink>
      <NavLink to='/products' className="text-lg font-bold text-red-400 hover:text-red-300 underline">Products</NavLink>
    </>
  )
}

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); /*  */
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState(params.get('search') || '');

  const isProductsPage = location.pathname.toLowerCase().includes("/products"); /* for the check if it's the products page or not */

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    navigate(`/products?search=${e.target.value}`);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className='flex w-1/3 justify-end items-center'>
        {/* Checking */}
        {isProductsPage && (          
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            className="border border-red-800 text-gray-600 rounded mr-2 p-1 focus:outline focus:border-gray-900 focus:outline-gray-600 md:p-2 md:mx-8" 
          /> 
        )}
        <div className='hidden md:flex items-center gap-6'>
          <NavLinks />
          <NavLink to='/basket' className=""><TiShoppingCart className="text-3xl text-red-400 hover:text-red-300" /></NavLink> { /* EMPTY */}
          <NavLink to='/profile' className=""><FaRegCircleUser className="text-3xl text-red-400 hover:text-red-300"/></NavLink> { /* EMPTY */ }

        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className='flex basis-full flex-col items-left my-10'>
          <NavLink to='/basket' className="text-lg font-bold text-red-400 hover:text-red-300 underline">Basket</NavLink>
          <NavLink to='/profile' className="text-lg font-bold text-red-400 hover:text-red-300 underline">My Profile</NavLink>
          <NavLinks />
        </div>
      )}
    </>
  )
}

export default Nav;
