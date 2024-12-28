'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src="/logo.svg" alt="HandLoom Logo" width={300} height={60} priority />
          </div>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden sm:flex items-center flex-1 max-w-lg mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow rounded-l-md border border-gray-200 bg-white py-2.5 pl-4 pr-2 text-sm text-black shadow-md font-medium focus:border-black focus:outline-none"
            aria-label="Search for products"
          />
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2.5 rounded-r-md focus:ring-2 focus:ring-yellow-500"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Account and Cart */}

        <div className="hidden sm:flex items-center space-x-8">
          <Link
            href="/account"
            className="flex items-center text-gray-700 hover:text-yellow-500 focus:text-yellow-500 transition duration-300"
          >
            <MdOutlineAccountCircle size={30} />
            <span className="ml-1">My Account</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center text-gray-700 hover:text-yellow-500 focus:text-yellow-500 transition duration-300"
          >
            <TiShoppingCart size={30} />
            <span className="ml-1">My Cart</span>
          </Link>

        </div>

        {/* Mobile Menu Toggle */}
        
           {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-100 text-gray-700 px-6 py-4 shadow-md">
          <MobileNavbar/>
        </div>
         )}
      
         
      </div>
      {/* Desktop Navbar */}
      <div className="hidden sm:block md:block bg-white text-gray-400 px-6 py-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
