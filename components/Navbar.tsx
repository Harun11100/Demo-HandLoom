import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav className="flex items-center justify-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-yellow-500">
        Home
      </Link>
      <Link href="/polo-shirt" className="text-gray-700 hover:text-yellow-500  ">
        Polo Shirt
      </Link>
      <Link href="/panjabi" className="text-gray-700 hover:text-yellow-500  ">
        Panjabi
      </Link>
      <Link href="/shirt" className="text-gray-700 hover:text-yellow-500  ">
        Shirt
      </Link>
      <Link href="/t-shirt" className="text-gray-700 hover:text-yellow-500  ">
        T-Shirt
      </Link>
      <Link href="/jacket" className="text-gray-700 hover:text-yellow-500  ">
        Jacket
      </Link>
      <Link href="/all-products" className="text-gray-700 hover:text-yellow-500  ">
        All Products
      </Link>
      <Link href="/20-off" className="text-gray-700 hover:text-yellow-500  ">
        20% Off
      </Link>
      <Link href="/40-off" className="text-gray-700 hover:text-yellow-500  ">
        40% Off
      </Link>
      <Link href="/best-discounts" className="text-gray-700 hover:text-yellow-500  ">
        Best Discounts
      </Link>
    </nav>
  )
}

export default Navbar