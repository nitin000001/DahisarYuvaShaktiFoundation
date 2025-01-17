import React, { useState } from "react";
import Logo from "../assets/logo-white.jpeg";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section>
        <header>
          <nav className="fixed top-0 left-0 w-full bg-transparent  flex justify-between items-center px-6 lg:px-8 h-20 shadow-lg z-50 backdrop-blur-md">
            {/* Logo Section */}
            <div className="logo flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={Logo}
                  className="h-12 w-12 rounded-full object-cover object-center bg-transparent"
                  alt="Logo"
                />
                <span className="font-bold text-lg tracking-wide text-black ">
                  DahisarYuvaShaktiFoundation
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-semibold"
                      : "hover:text-green-700 font-semibold transition-colors duration-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-semibold"
                      : "hover:text-red-700 transition-colors duration-300"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-semibold"
                      : "hover:text-red-700 transition-colors duration-300"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/OurWork"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-semibold"
                      : "hover:text-red-700 transition-colors duration-300"
                  }
                >
                  OurWork
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-500 text-black px-4 py-1 rounded-md font-semibold shadow-md"
                      : "bg-green-400 text-black px-4 py-1 rounded-md hover:bg-yellow-500 transition-all duration-300 shadow-md"
                  }
                >
                  Donate
                </NavLink>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-[90px] md:hidden bg-white relative text-black shadow-lg">
              <ul className="flex flex-col  z-10 fixed bg-white right-0 rounded-lg gap-4 p-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-green-400 font-semibold"
                        : "block hover:text-gray-200 transition-colors duration-300"
                    }
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-green-400 font-semibold"
                        : "block hover:text-gray-200 transition-colors duration-300"
                    }
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-green-400 font-semibold"
                        : "block hover:text-gray-200 transition-colors duration-300"
                    }
                    onClick={closeMenu}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/OurWork"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-green-400 font-semibold"
                        : "block hover:text-gray-200 transition-colors duration-300"
                    }
                    onClick={closeMenu}
                  >
                    OurWork
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/donate"
                    className={({ isActive }) =>
                      isActive
                        ? "block bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold shadow-md"
                        : "block bg-green-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-all duration-300 shadow-md"
                    }
                    onClick={closeMenu}
                  >
                    Donate
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </header>
      </section>
    </div>
  );
};

export default Navbar;
