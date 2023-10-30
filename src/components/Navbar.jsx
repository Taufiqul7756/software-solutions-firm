import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle menu state

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // navItems Array
  const navItems = [
    { link: "Home", path: "Home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 border-bg-white" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8 duration-300">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x "
          >
            {" "}
            <img
              src={logo}
              alt=""
              className=" w-10 inline-block items-center"
            />{" "}
            <span className="text-[#263238] ">TAUFIQ</span>
          </a>

          {/* Navbar for Desktop Version  : space-x-12*/}

          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-Gray hover:text-BrandPrimary "
              >
                {" "}
                {link}
              </Link>
            ))}
          </ul>
          {/* Button for Desktop Version  : space-x-12*/}

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-BrandPrimary hover:text-Gray "
            >
              login
            </a>
            <button className="bg-BrandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-NeutralD_Grey">
              {" "}
              Sign up
            </button>
          </div>
          {/* Menu for Mobile Version  :*/}

          <div className="md:hidden">
            <button
              onClick={toggleMenuOpen}
              className=" text-NeutralD_Grey focus:outline-none"
            >
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* NavItems for mobile devices  */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-BrandPrimary  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-Gray hover:text-BrandPrimary "
            >
              {" "}
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
