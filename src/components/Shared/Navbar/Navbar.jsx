import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import ThemeController from "../../../Theme/ThemeController";
import Logo from "../Logo/Logo";

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
    <div className="fixed w-full bg-base-100 text-base-content z-10 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/">
             <Logo/>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-4 transition rounded-md ${
                      isActive
                        ? "bg-primary text-white font-semibold"
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
                className="text-3xl p-2 rounded-md border border-neutral-300"
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
                <img
                  className="rounded-full"
                  src={user?.photoURL || avatarImg}
                  alt="profile"
                  width="30"
                  height="30"
                />
              </div>

              {isOpen && (
                <div className="absolute right-0 top-12 w-44 bg-base-100 shadow-md rounded-xl overflow-hidden text-base-content">
                  <div className="flex flex-col text-sm">
                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-base-200"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-base-200 cursor-pointer"
                        >
                          Logout
                        </div>
                        <div className="py-3">
                          <ThemeController />
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-base-200"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-base-200"
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
            <div className="md:hidden mt-4 bg-base-100 rounded-md shadow-md py-4 px-4 text-base-content">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md mb-1 ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-base-200 font-medium"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile User Section */}
              <div className="mt-4 border-t border-base-200 pt-4">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block py-2 px-3 hover:bg-base-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logOut}
                      className="w-full text-left py-2 px-3 hover:bg-base-200"
                    >
                      Logout
                    </button>
                    <div className="">
                      <ThemeController />
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block py-2 px-3 hover:bg-base-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block py-2 px-3 hover:bg-base-200"
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
