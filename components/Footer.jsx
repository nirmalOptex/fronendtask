import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f9fc] px-8 md:px-80 pt-12 pb-6 flex flex-col rounded-t-[80px] mt-40 font-medium">
      {/* Top Content */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Info */}
        <div className="md:w-1/3">
          <img
            src="/assets/logo.png"
            alt="Aakash Labs Logo"
            className="h-10 mb-4"
          />
          <p className="text-gray-700 mb-4">
            AakashLabs implements advanced digital technologies in areas that
            are crucial to meeting your business objectives. Connect with us for
            details.
          </p>
          <p className="text-gray-800">info@aakashlabs.com</p>
          <p className="text-gray-800">01-4530196</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-[#031b4e] mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Our Expertise</li>
            <li>Case Studies</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-[#031b4e] mb-4">ABOUT</h3>
          <ul className="space-y-2 text-gray-700">
           <a href="#about"> <li>About Us</li></a>
            <a href="#team"> <li>Team</li></a>
            <a href="#contact"> <li>contact</li></a>
            
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-[#031b4e] mb-4">Get Connected</h3>
          <div className="flex gap-4 text-xl text-gray-800">
            <a href="https://facebook.com"><FaFacebookF className="hover:text-blue-600 cursor-pointer" /></a>
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-800 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
        © 2021 All Rights Reserved Aakash Labs
      </div>
    </footer>
  );
};

export default Footer;
