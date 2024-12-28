import Image from "next/image";
import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20 py-20 px-8">
      <hr className="border-t border-yellow-600 mb-4" />
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Media Section */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">Follow us:</span>
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaFacebook size={24} color="white" />
            </a>
            <a
              href="#"
              aria-label="Follow us on YouTube"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaYoutube size={24} color="white" />
            </a>
            <a
              href="#"
              aria-label="Follow us on WhatsApp"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaWhatsapp size={24} color="white" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Instagram"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaInstagram size={24} color="white" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Telegram"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaTelegram size={24} color="white" />
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm">Download App:</span>
          <a href="#" aria-label="Download on Google Play">
            <Image
              src="/icons/googleplay.svg"
              alt="Download on Google Play"
              width={140}
              height={50}
            />
          </a>
          <a href="#" aria-label="Download on the App Store">
            <Image
              src="/icons/applestore.svg"
              alt="Download on the App Store"
              width={140}
              height={50}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
