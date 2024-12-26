import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav className="flex items-center justify-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-white">
        Home
      </Link>
      <Link href="/polo-shirt" className="text-gray-700 hover:text-white ">
        Polo Shirt
      </Link>
      <Link href="/panjabi" className="text-gray-700 hover:text-white ">
        Panjabi
      </Link>
      <Link href="/shirt" className="text-gray-700 hover:text-white ">
        Shirt
      </Link>
      <Link href="/all-products" className="text-gray-700 hover:text-white ">
        All Products
      </Link>
      <Link href="/20-off" className="text-gray-700 hover:text-white ">
        20% Off
      </Link>
      <Link href="/40-off" className="text-gray-700 hover:text-white ">
        40% Off
      </Link>
      <Link href="/best-discounts" className="text-gray-700 hover:text-white ">
        Best Discounts
      </Link>
    </nav>
  )
}

export default Navbar