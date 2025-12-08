import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/images/Screenshot from 2025-12-07 12-52-30.png";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

// User Menu
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import SellerMenu from "./Menu/SellerMenu";
import CustomerMenu from "./Menu/CustomerMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Toggle sidebar (Mobile only)
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Close sidebar on clicking outside
  const closeSidebar = () => setActive(false);

  return (
    <>
      {/* ---------------- Small Screen NavBar (Only Mobile) ---------------- */}
      <div className="bg-gray-100 text-gray-800 md:hidden flex items-center justify-between px-4 py-3 shadow">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" width="70" />
        </Link>

        {/* Menu Button */}
        <button
          onClick={handleToggle}
          className="p-2 rounded border border-gray-300"
        >
          <AiOutlineBars className="text-2xl" />
        </button>
      </div>

      {/* ---------------- Mobile Overlay (When Sidebar Open) ---------------- */}
      {isActive && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
        ></div>
      )}

      {/* ---------------- Sidebar ---------------- */}
      <div
        className={`z-30 md:z-10 fixed md:fixed flex flex-col justify-between bg-gray-100 w-64 h-screen px-2 py-4 shadow-md 
          transform transition-transform duration-300 ease-in-out
          ${isActive ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo (Desktop Only) */}
          <div className="hidden md:flex justify-center items-center mb-4">
            <Link
              to="/"
              className="w-full flex items-center justify-center bg-lime-100 rounded-lg shadow px-4 py-2"
            >
              <img src={logo} alt="logo" width="100" />
            </Link>
          </div>

          {/* ------------ Menu Items ------------ */}
          <div className="flex-1 mt-4">
            <nav>
              <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
              />

              {/* Role Based Menus */}
              <CustomerMenu />
              <SellerMenu />
              <AdminMenu />
            </nav>
          </div>

          {/* ------------ Bottom Menu ------------ */}
          <div>
            <hr className="my-3" />

            <MenuItem
              icon={FcSettings}
              label="Profile"
              address="/dashboard/profile"
            />

            {/* Logout */}
            <button
              onClick={logOut}
              className="flex items-center w-full px-4 py-2 mt-4 text-gray-700 hover:bg-gray-300 transition rounded-md"
            >
              <GrLogout className="h-5 w-5" />
              <span className="ml-3 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
