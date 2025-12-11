import { Link } from "react-router";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsGraphUp } from "react-icons/bs";
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import SellerMenu from "./Menu/SellerMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import { RiArrowGoBackFill } from "react-icons/ri";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {

  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-30 md:z-10 fixed md:fixed flex flex-col justify-between bg-gray-100 w-64 h-screen px-2 py-4 shadow-md transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Items */}
          <div className="flex-1 mt-4">
            <nav>
              {/* <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" /> */}
              <CustomerMenu />
              {/* <SellerMenu /> */}
              {/* <AdminMenu /> */}
            </nav>
          </div>

          {/* Bottom Menu */}
          <div>
            <hr className="my-3" />
            <MenuItem  label="Back to Home" icon={RiArrowGoBackFill} address="/" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
