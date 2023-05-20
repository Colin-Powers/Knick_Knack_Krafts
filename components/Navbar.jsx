import React, { useState } from "react";
import Logo from "../assets/KKK_Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#008B8B] text-[#fff]">
      {/*logo*/}
      <div className="text-3xl sm:text-4xl text-[#fff]">
        <ul>
          <li className="w-[115px] sm:w-[170px] pt-6">
            <img src={Logo} alt="Knick Knack Krafts" />
          </li>
        </ul>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex text-3xl text-{#fff]">
        {/* Home Link */}
        <li className="hover:text-[#ffcba4]">
          <a href="/">Home</a>
        </li>

        {/* Projects Dropdown Menu */}
        <li className="hover:text-[#ffcba4]">
          <a href="/Krafts">Products</a>
        </li>
        {/* Skills Link */}
        <li className="hover:text-[#ffcba4]">
          <a href="/About">About</a>
        </li>
        {/*Contact Link */}
        <li className="hover:text-[#ffcba4]">
          <a href="/Contact">Contact</a>
        </li>
      </ul>

      {/*Hamburger Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer bg-[#008B8B]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#008B8B] flex flex-col text-2xl items-center"
        }
      >
        <li className="py-2">
          <a href="/">Home</a>
        </li>
        <li className="py-2 text 4xl">
          <a href="/About">About</a>
        </li>
        <li className="py-2 text 4xl">
          <a href="/Krafts">Products</a>
        </li>
        <li className="py-2">
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
