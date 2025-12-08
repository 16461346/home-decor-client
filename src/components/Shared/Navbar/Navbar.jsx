import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/Screenshot_from_2025-12-07_12-52-30-removebg-preview.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/aboute" },
    { name: "Contact", path: "/contact" },
    { name: "Coverage", path: "/coverage" },
  ];

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="logo" width="80" height="80" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-4 transition ${
                      isActive
                        ? "bg-primary text-white rounded-md font-semibold"
                        : "font-medium hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-3xl p-2 rounded-md border border-gray-300"
              >
                <AiOutlineMenu />
              </button>
            </div>

            {/* Desktop Dropdown */}
            <div className="relative hidden md:block">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-neutral-300 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
              >
                <AiOutlineMenu />
                <img
                  className="rounded-full"
                  src={user?.photoURL || avatarImg}
                  alt="profile"
                  width="30"
                  height="30"
                />
              </div>

              {isOpen && (
                <div className="absolute right-0 top-12 w-40 bg-white shadow-md rounded-xl overflow-hidden">
                  <div className="flex flex-col text-sm">
                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenu && (
            <div className="md:hidden mt-4 bg-white rounded-md shadow-md py-4 px-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md mb-1 ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-gray-200 font-medium"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile User Section */}
              <div className="mt-4 border-t pt-4">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block py-2 px-3 hover:bg-gray-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logOut}
                      className="w-full text-left py-2 px-3 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block py-2 px-3 hover:bg-gray-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block py-2 px-3 hover:bg-gray-200"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
