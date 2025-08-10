import React from "react";
import { Link } from "react-scroll";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaYoutube,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  return (
    <div className="text-white lg:h-screen md:bg-[url('/grid.png')] bg-no-repeat bg-top max-w-7xl mx-auto flex justify-between items-center flex-col lg:flex-row">
      {/* Left Section */}
      <div className="lg:w-[60%]  pt-10 flex md:flex-row flex-col gap-5 md:gap-0 justify-center items-center">
        <div>
          <h1 className="md:text-5xl text-3xl font-semibold font-[Poppins]">
            Juwel
            <br className="" /> Hossain
            <span className="text-yellow-400">.</span>
          </h1>
          <hr className="mt-2 border-2 w-8 text-yellow-400 border-yellow-400" />
          <div className="flex space-x-4 mt-4">
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
        <div className="md:w-80 w-64">
          <img src="https://i.ibb.co/xKd3jY5K/20250629-181542.png" alt="" />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        {/* Navbar */}
        <nav className="flex justify-start space-x-6 text-sm md:text-lg font-[Poppins] mb-12">
          <Link
            smooth={true}
            duration={500}
            className="cursor-pointer text-yellow-400"
          >
            HOME
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400"
          >
            SKILLS
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-yellow-400"
          >
            WORKS
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-yellow-400"
          >
            CONTACT
          </Link>
        </nav>

        {/* Hero Text */}
        <div className="text-left font-[Poppins]">
          <p className="text-sm uppercase text-gray-400 mb-2">— Introduction</p>
          <h2 className="md:text-3xl text-xl font-semibold mb-4">
            Self Learner and Passionate {" "} <br></br>
            <span className="text-yellow-400 font-mono">
              <Typewriter
                words={["Frontend Developer.", "MERN Stack Develepor.", "React Developer."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Coding is my passion, and I enjoy building beautiful and functional
            web experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1V8Xz-3xYxBmZKxcKkVmxJVniWfpPKmI0/view?usp=sharing"
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm px-4 py-2 rounded-md transition"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
