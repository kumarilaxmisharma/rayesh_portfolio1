import { NavLink } from 'react-router-dom';
import logo from '/assets/images/logo.png';

const Navbar = () => {
  return (
    <div className="font-sans fixed grid grid-cols-1 md:grid-cols-3 py-4 px-4 md:px-8 lg:px-16 z-50 bg-white/10 backdrop-blur shadow-md w-full top-0 left-0 right-0 transition-all duration-300 ease-in-out">

      <div className="flex items-center justify-center md:justify-start">
        <NavLink to="/" className="flex items-center space-x-3 group ">
          <div className="relative">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </div>
        </NavLink>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-18 md:justify-center">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            } text-base md:text-lg`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about_me" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            } text-base md:text-lg`
          }
        >
          About_Me
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            } text-base md:text-lg`
          }
        >
          Services
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'text-gray-200 hover:text-red-400'
            } text-base md:text-lg`
          }
        >
          Projects
        </NavLink>
      </div>

      {/* Mobile menu button */}
      <div className="flex items-center justify-center md:justify-end">
        <NavLink
          to="/contact_me" 
          className="text-gray-200 hover:text-white border-2 border-gray-200 rounded-4xl px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 hover:bg-slate-800 active:bg-slate-900 text-sm md:text-base"
        >
          Contact_Me
        </NavLink>
      </div>
    </div>
  )
};

export default Navbar;
// ...existing code...