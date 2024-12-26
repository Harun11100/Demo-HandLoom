'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";


const Header = () => {
  return (

<header className="bg-white shadow-sm">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
    <div className="flex items-center">
      <Image src="/logo.svg" alt="HandLoom Logo" width={300} height={60} />
    </div>

    {/* Search Bar */}
    <div className="flex items-center flex-1 max-w-lg mx-6">
      <input
        type="text"
        placeholder="Search for products..."
        className="flex-grow rounded-l-md border border-gray-200 bg-white py-2.5 pl-4 pr-2 text-sm text-black shadow-md font-medium focus:border-black focus:outline-none"
        aria-label="Search for products"
      />
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2.5 rounded-r-md"
        aria-label="Search"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
    <div className="flex items-center space-x-6">
      <Link href="/account" className="flex items-center text-gray-700 hover:text-yellow-500">
        <span>My Account</span>
      </Link>
      <Link href="/cart" className="flex items-center text-gray-700 hover:text-yellow-500">
        <span>My Cart</span>
      </Link>
    </div>
  </div>

  {/* Navbar Section */}
  <div className="bg-white text-gray-400 px-6 py-2">
    <Navbar />
  </div>
</header>

  );
};

export default Header;
