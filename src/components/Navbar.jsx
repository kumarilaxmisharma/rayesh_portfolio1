import { NavLink } from 'react-router-dom';
import logo from '/assets/images/logo.png';

const Navbar = () => {
  return (
    <div className="font-sans fixed grid grid-cols-1 md:grid-cols-3 py-4 px-16 z-50 bg-white/10 backdrop-blur shadow-md w-full top-0 left-0 right-0 transition-all duration-300 ease-in-out">

      <div className="flex items-center justify-center md:justify-start">
        <NavLink to="/" className="flex items-center space-x-3 group ">
          <div className="relative">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </div>
        </NavLink>
      </div>

      <div className="flex items-center justify-center space-x-18 md:justify-center">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about_me" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            }`
          }
        >
          About_Me
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            }`
          }
        >
          Services
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            }`
          }
        >
          Projects
        </NavLink>
      </div>

      <div className="flex items-center justify-center md:justify-end">
        <NavLink
          to="/contact_me" 
          className="text-gray-200 hover:text-white border-2 border-gray-200 rounded-4xl px-4 py-2 transition-colors duration-300 hover:bg-slate-800 active:bg-slate-900 "
        >
          Contact_Me
        </NavLink>
      </div>

    </div>
  )
};

export default Navbar;