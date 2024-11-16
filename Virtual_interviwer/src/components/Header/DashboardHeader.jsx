import { Link , NavLink} from "react-router-dom";
import { useState } from "react";

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black px-4 py-4">
        <div className="flex flex-wrap justify-evenly items-center mx-auto mt-2">
          <button type="button" className="text-white" onClick={toggleMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link to="/" className="flex items-center">
            <div className="text-2xl ml-4 text-white font-bold">
              Virtual <span className="text-blue1">AI</span>
            </div>
          </Link>

          <div className="flex items-center gap-3 px-2 py-1.5 bg-darkblue bg-opacity-50 rounded-2xl">
            <div className="bg-gray-300 w-6 h-6 rounded-full flex justify-center items-center font-semibold text-xs">V</div>
            <img src="/down-arrow.png" className="w-4 h-4" alt="" />
          </div>

        </div>

        <div className={`bg-black2 ${isMenuOpen ? 'block' : 'hidden'} h-screen w-1/4 z-10 absolute top-0 left-0`}>
          <div className="flex justify-end mt-4 mr-4">
            <img src="/close.svg" className="`${isMenuOpen ? 'block' : 'hidden'}` flex w-8 h-8 opacity-75 cursor-pointer" alt="" onClick={toggleMenu} />
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} `}>
            <ul className="flex flex-col mt-12 text-lg gap-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 text-center duration-200 ${isActive ? "text-blue1" : "text-gray-100"} hover:bg-blue1`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 text-center duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:bg-blue1`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 text-center duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:bg-blue1 `
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 text-center duration-200 ${isActive ? "text-blue2" : "text-gray-100"} hover:bg-blue1 `
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
