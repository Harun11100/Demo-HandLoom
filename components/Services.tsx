import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-yellow-100 p-6 md:flex-row md:space-x-6">
      {/* Promo Section */}
      <div className="text-center md:text-left">
        <p className="text-base font-normal">
          Make your first purchase and get free delivery.
          <br />
          <span>
            Minimum order 1500tk. Use coupon code{' '}
            <span className="font-semibold">“FirstPurchase”</span>
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-4 md:mt-0">
        <Image
          src="/file.png"
          alt="A promotional t-shirt image"
          width={400}
          height={500}
        />
      </div>

      {/* Link Section */}
      <div className="mt-4 md:mt-0">
        <Link
          href="/all-products"
          className="text-blue-500 hover:underline font-medium"
        >
          Our All Products | Shop Now &gt;
        </Link>
      </div>
    </div>
  );
};

export default Services;
