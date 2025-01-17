import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-[60px]  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-lg ">Dahisar Yuva Shakti Foundation</h1>
            <p className="text-sm">Standing Together, For a Better Future</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <Link
              to="https://wa.me/919967116720"
              target="_blank"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="https://www.facebook.com/yourpage" // Replace with your Facebook link
              target="_blank"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/___nitz__________?igsh=MXVuZzdxN3Y2dzE1Mw==" 
              target="_blank"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              to="mailto:dahisaryuvashaktifoundation@gmail.com"
              className="hover:text-red-500 transition"
              aria-label="Email"
            >
              <CgMail />
            </Link>
          </div>
          <p className="mt-4">
            <a
              href="mailto:dahisaryuvashaktifoundation@gmail.com"
              className="hover:underline text-blue-500"
            >
              dahisaryuvashaktifoundation@gmail.com
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Dahisar Yuva Shakti Foundation.
            All Rights Reserved.
          </p>

          {/* Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-sm hover:text-green-400 transition">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:text-green-400 transition">
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:text-green-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
