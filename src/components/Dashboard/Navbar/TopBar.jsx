import { useState } from "react";
import logo from "../../../assets/images/Screenshot from 2025-12-07 12-52-30.png";
import { Link } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const TopBar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logOut } = useAuth();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed top-0 z-50 w-full md:px-4 lg:px-4 bg-base-200 border-b border-base-300">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="hidden md:flex items-center">
          <img src={logo} alt="logo" className="w-12 sm:w-14 md:w-16" />
        </Link>

        {/* Mobile Hamburger */}
        <div className="flex items-center space-x-2  md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded border border-gray-300 hover:bg-gray-300 transition"
          >
            <AiOutlineBars className="text-2xl" />
          </button>
        </div>

        {/* Profile */}
        <div className="relative md:block">
          <button
            onClick={toggleDropdown}
            className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-400 p-1"
            aria-expanded={dropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-12 w-44 bg-base-200 border border-base-300 rounded-lg shadow-lg py-2">
              <div className="px-4 py-3 border-b border-base-300">
                <p className="text-sm font-medium">Neil Sims</p>
                <p className="text-sm text-gray-600 truncate">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="text-sm text-gray-700 font-medium">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <Link
                    to={"/dashboard/profile"}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <a
                    onClick={logOut}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
