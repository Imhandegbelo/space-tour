import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import close from "../assets/icons/icon-close.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = document.location.pathname;
  const links = [
    { name: "HOME", path: "/" },
    { name: "DESTINATION", path: "/destination" },
    { name: "CREW", path: "/crew" },
    { name: "TECHNOLOGY", path: "/technology" },
  ];
  return (
    <nav className="flex w-full justify-between items-center lg:pt-14 md:text-sm lg:text-base text-white z-10 md:pl-10 lg:-pr-6 md:h-20 h-24">
      <Link to="/">
        <img src={logo} alt="logo" className="ml-6" />
      </Link>
      <div className="hidden md:flex items-center justify-between md:w-7/12 md:px-6 md:-mr-2 lg:px-20 lg:gap-12 bg-opacity-20 rounded-lg backdrop-blur-lg bg-gray-200">
        {links.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            className={`border-b-4 ${location == link.path? "border-white":"border-transparent"} hover:border-white md:py-6 lg:py-10`}
          >
            <span className="hidden lg:inline font-bold mr-3">0{index}</span>
            {link.name}
          </Link>
        ))}
      </div>

      {isOpen && (
        <div className="flex flex-col h-screen w-2/3 absolute top-0 right-0 bg-opacity-20 rounded-l-lg backdrop-blur-xl bg-stone-400 p-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden mr-6 mb-24"
          >
            <img src={close} alt="" className="w-10 absolute right-6 top-6" />
          </button>
          {links.map((link, index) => (
            <Link key={link.path} to={link.path} className="py-2">
              <span className="font-bold mr-3">0{index}</span>
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-6">
        <img src={hamburger} alt="" className="w-10" />
      </button>
    </nav>
  );
}
