import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Your Company</h2>
          <p className="mt-3 text-sm">
            Building the future of web applications with cutting-edge
            technologies.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-3 space-x-4">
            <a href="#" className="hover:text-blue-400 text-xl">
              🐦 Twitter
            </a>
            <a href="#" className="hover:text-blue-400 text-xl">
              📘 Facebook
            </a>
            <a href="#" className="hover:text-blue-400 text-xl">
              📷 Instagram
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">Subscribe</h3>
          <p className="text-sm mt-3">Stay updated with our latest news</p>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 text-center pt-5 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;