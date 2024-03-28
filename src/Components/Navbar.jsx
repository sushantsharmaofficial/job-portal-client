import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navitems

  const navItems = [
    {
      path: "/",
      title: " Start a search",
    },
    {
      path: "/my-job",
      title: "My Jobs",
    },
    {
      path: "/salary",
      title: "Salary Estimate",
    },
    {
      path: "/post-job",
      title: "Post a Job",
    },
  ];
  return (
    <header className="container mx-auto  max-w-screen-2xl xl:px-8 px-4 ">
      {/* navbar desktop */}
      <nav className="flex justify-between items-center ">
        <a href="/" className=" -mt-5">
          <img src={Logo} height={150} width={150} alt="logo" />
        </a>
        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12  ">
          {navItems.map(({ path, title }) => (
            <li key={path} className=" text-base text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* signup and login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/" className="py-2 px-5 border rounded bg-blue text-white">
            Let's Get Started
          </Link>
        </div>

        {/* navbar mobile toggle  btn */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-8 h-8 text-primary" />
            ) : (
              <FaBarsStaggered className="w-8 h-8 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navbar mobile */}
      <nav>
        <div
          className={`px-4 bg-black py-5 rounded-sm ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="   ">
            {navItems.map(({ path, title }) => (
              <li key={path} className="  text-white first:text-white py-1">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className=" text-white py-1">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
