import React from "react";
import logo from '../assets/logo.png'
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E2F] text-white font-[Poppins] py-10 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Section: Branding Left, Nav Center, Social Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Branding & Resume */}
          <div className="flex-1">
            <h2 className=" text-xl md:text-2xl font-bold">MD JUWEL HOSSAIN</h2>
            <p className="text-[#cccccc] text-xs md:text-sm">MERN Stack Developer</p>
            <a
              href="https://drive.google.com/file/d/1ZxJ5bABhzMkLASel2cVwhFU7Hy0oc-2R/view?usp=sharing"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm px-4 py-2 rounded-md transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
            <div><img src={logo} className="w-44" alt="" /></div>
          {/* Right: Social Icons */}
          <div className="flex-1 flex md:justify-end justify-start gap-4 text-xl text-white">
            <a
              href="https://www.youtube.com/@juwelmafi"
              target="_blank"
              className="text-xl hover:text-yellow-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.github.com/juwelmafi"
              target="_blank"
              className="text-xl hover:text-yellow-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juwelmafi"
              target="_blank"
              className="text-xl hover:text-yellow-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-xs text-[#888888]">
          © {new Date().getFullYear()} MD JUWEL HOSSAIN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
