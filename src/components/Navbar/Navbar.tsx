"use client";

import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Button from "../Button";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-20 bg-secondary shadow-lg py-3 px-4 lg:px-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 text-sm">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.svg" width={138} height={52} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-9 items-center">
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">Support</NavLink>
            <NavLink href="#">Login</NavLink>
            <Button className="text-secondary" label="Get Access" withIcon={false} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <CiMenuBurger
              className="cursor-pointer text-2xl text-white"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-secondary z-30 md:hidden">
          <div className="flex flex-col px-4 pt-4 pb-2 space-y-2">
            <div className="flex justify-between items-center py-2">
              <div className="flex-shrink-0">
                <Image src="/logo.svg" width={138} height={52} alt="Logo" />
              </div>
              <IoClose
                className="cursor-pointer text-3xl text-white"
                onClick={toggleMenu}
              />
            </div>
            <NavLink href="#" className="block text-white text-lg py-2">Products</NavLink>
            <NavLink href="#" className="block text-white text-lg py-2">Blog</NavLink>
            <NavLink href="#" className="block text-white text-lg py-2">Support</NavLink>
            <NavLink href="#" className="block text-white text-lg py-2">Login</NavLink>
            <Button className="text-secondary" label="Get Access" withIcon={false} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
