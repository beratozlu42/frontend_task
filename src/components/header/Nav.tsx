import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLinks = () => {
  return (
    <>
      <NavLink to='/' className="text-lg">Home</NavLink>
      <NavLink to='/Products' className="text-lg">Products</NavLink>
    </>
  )
}

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className='flex w-1/3 justify-end'>
        <div className="hidden w-40 md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className='flex basis-full flex-col items-left'>
          <NavLinks />
        </div>
      )}
    </>
  )
}

export default Nav;
