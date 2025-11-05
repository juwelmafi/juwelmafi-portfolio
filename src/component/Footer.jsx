import React from "react";
import logo from "../assets/logo.png";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#12121C] text-white font-[Poppins] pt-12 pb-6 px-4 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Branding */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-wide">
              MD JUWEL HOSSAIN
            </h2>
            <p className="text-gray-400 text-sm">MERN Stack Developer</p>
            <a
              href="https://drive.google.com/file/d/1NyyfiNHplq8Dy3rrW8qe_1fTP97MqJfE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm px-5 py-2.5 rounded-lg shadow transition-all duration-300 hover:scale-105"
            >
              <FaDownload className="text-base" /> Resume
            </a>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-44 drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Social Links */}
          <div className="flex md:justify-end justify-center gap-5 text-2xl">
            <a
              href="https://www.youtube.com/@juwelmafi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.github.com/juwelmafi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juwelmafi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">MD JUWEL HOSSAIN</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
