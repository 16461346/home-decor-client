import { useState } from "react";
import { Link } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine, RiSettings3Line } from "react-icons/ri";
import Logo from "../../Shared/Logo/Logo";
import ThemeController from "../../../Theme/ThemeController";

const TopBar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logOut, user } = useAuth();
  console.log(user);
  

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed top-0  z-50 w-full md:px-4 lg:px-4 bg-base-200 border-b border-base-300">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard">
          <div className="hidden md:block">
            <Logo />
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <div className="flex items-center w-full justify-start pl-8 md:hidden">
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
              src={
                user?.photoURL ||
                "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              }
              alt="user"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-base-200 border border-base-300 rounded-lg shadow-lg py-2">
              <div className="px-4 py-3 border-b border-base-300">
                <p className="text-sm font-medium">{user?.displayName}</p>
                <p className="text-sm text-gray-600 truncate">{user?.email}</p>
              </div>
              <ul className="text-sm text-gray-700 font-medium">
                <li>
                  <Link
                    to={"/dashboard/profile"}
                    href="#"
                    className="flex items-center gap-1 px-4 py-2 hover:bg-gray-300 rounded"
                  >
                    <CgProfile size={20} /> Profile
                  </Link>
                </li>
                <li>
                  <a
                    onClick={logOut}
                    href="#"
                    className="flex gap-1 items-center px-4 py-2 hover:bg-gray-300 rounded"
                  >
                    <RiLogoutBoxLine size={20} /> Sign out
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-1 items-center px-4 py-2 hover:bg-gray-300 rounded"
                  >
                    <RiSettings3Line size={20} /> Settings
                  </a>
                </li>
                <li className="pl-2">
                  <ThemeController />
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
