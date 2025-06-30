import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scrollni bloklash (mobil menyu ochilganda)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header className='w-full bg-[rgba(0,0,0,0.6)] h-[70px] fixed top-0 left-0 z-50'>
      <div className='max-w-[1320px] mx-auto px-4 h-full flex items-center justify-between'>

        <NavLink to='/' className='text-white text-[24px] font-semibold'>
          Waymo
        </NavLink>

        <nav className='hidden md:flex gap-6 text-white font-[18px]'>
          {['/destination', '/gallery', '/travelPackages', '/contact'].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                `transition-all duration-300 hover:underline underline-offset-4 ${
                  isActive ? "underline" : ""
                }`
              }
            >
              {path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase()) || 'Home'}
            </NavLink>
          ))}
        </nav>

        <div className='hidden md:block text-white'>
          <select className='uppercase bg-transparent outline-none'>
            <option className='text-black' value="eng">En</option>
          </select>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (absolute joylashuv bilan) */}
      {isOpen && (
        <div className='md:hidden absolute top-[70px] left-0 w-full bg-black text-white px-4 py-4 space-y-4 z-40'>
          {['/destination', '/gallery', '/travelPackages', '/contact'].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-all duration-300 hover:underline underline-offset-4 ${
                  isActive ? "underline" : ""
                }`
              }
            >
              {path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase()) || 'Home'}
            </NavLink>
          ))}

          <select className='uppercase bg-black border rounded-[5px] border-white mt-2 text-white px-2 py-1'>
            <option value="eng">En</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;
