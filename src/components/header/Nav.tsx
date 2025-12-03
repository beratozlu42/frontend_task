import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ShoppingCart, User } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  className?: string;
}

export const Nav = () => {
  const navItems: NavItem[] = [
    { name: 'Products', href: '/products', className: 'font-bold' },
    { name: 'About Us', href: '/about', className: 'font-bold' },
    { name: 'Contact', href: '/contact', className: 'font-bold' },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const isProductsPage = location.pathname.includes("/products");

  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState(params.get('search') || '');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  
    navigate(`/products?search=${value}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="  ">
            <a href="/" className="lg:text-2xl text-xl font-bold text-[#470808]">
              E-PRODUCTS
            </a>
          </div>
          <nav className="hidden lg:flex flex-grow justify-center gap-6 items-center text-[#470808]">
            {isProductsPage && (
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearch}
                className="border border-gray-400 text-gray-600 rounded-xl mr-2 p-1 focus:outline focus:border-[#470808] focus:outline-[#470808] md:p-2 md:mx-2"
              />
            )}
            
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.href} className={item.className}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            
            <a href="/cart" className="p-2 relative hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="w-6 h-6 text-[#470808]" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full">
              </span>
            </a>

            <a href="/account" className="p-2 hover:bg-gray-100 rounded-full transition">
              <User className="w-6 h-6 text-[#470808]" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden px-4 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
          {isProductsPage && (
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearch}
                className="border border-gray-400 text-gray-600 rounded-xl p-2 focus:outline focus:border-[#470808] focus:outline-[#470808] w-full"
              />
            )}
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-bold text-[#470808] hover:bg-gray-50"
            >{item.name}</a>
          ))}
        </div>
      )}
    </>
  )
}

export default Nav;
