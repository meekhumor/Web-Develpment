import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-2">
          <Link to="/" className="flex items-center">
            <div className='text-2xl ml-4 text-white font-bold'>Virtual <span className='text-blue1'>AI</span></div>
          </Link>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
                </svg>
            </button>
          </div>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-black1 transition duration-200 ease-in-out bg-white hover:bg-gray-900 hover:text-white font-medium rounded-3xl text-sm px-5 lg:px-5 py-2 lg:py-2.5 mr-2 "
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-white transition duration-200 ease-in-out bg-blue1 hover:bg-darkblue font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 ml-45 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue1" : "text-gray-100"} hover:text-blue1 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:text-blue1 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:text-blue1 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:text-blue1 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden w-full`}>
          <ul className="flex flex-col items-center mr-10 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue1" : "text-gray-100"} hover:text-blue1 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:text-blue1 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:text-blue1 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:text-blue1 lg:p-0`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

