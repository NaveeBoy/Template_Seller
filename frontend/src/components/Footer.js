import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a company dedicated to providing high-quality website templates
            for developers and businesses.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400">
            Email: info@example.com<br />
            Phone: +1 123-456-7890<br />
            Address: 123 Street, City, Country
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-400 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="mt-4">
            <img src="/path/to/payment-icons.png" alt="Payment Icons" className="inline-block" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;