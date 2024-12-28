import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Promo = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-yellow-200 p-6 md:flex-row md:space-x-6">
      {/* Promo Section */}
      <div className="flex flex-1 justify-center items-center text-center md:text-left">
        <p className="text-base font-normal">
          Make your first purchase and get free delivery.
          <br />
            Minimum order 1500tk. Use coupon code{' '}
            <span className="font-semibold">“FirstPurchase”</span>
        </p>
      </div>
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
          className="text-blue-500  font-medium"
        >
          <span className='bg-yellow-700 p-3 text-white rounded-lg'>
          Our All Products | Shop Now &gt;
          </span>
         
        </Link>
      </div>
    </section>
  );
};

export default Promo;
