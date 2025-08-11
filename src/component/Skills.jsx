import React from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#323647] text-white py-16 px-4 md:px-20 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-[#FDCB6E] uppercase text-sm md:text-base tracking-widest mb-10">
          Tools & Technologies I Use
        </p>

        {/* Marquee */}
        <Fade>
          <Marquee
            pauseOnHover
            gradient={false}
            speed={60}
            className="overflow-hidden"
          >
            <div className="flex gap-4 md:gap-16 items-center text-3xl lg:text-5xl">
              <FaHtml5 className="text-orange-500 ml-4 md:ml-0" title="HTML5" />
              <FaCss3Alt className="text-blue-500" title="CSS3" />
              <SiJavascript className="text-yellow-400" title="JavaScript" />
              <FaReact className="text-cyan-400" title="React.js" />
              <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />
              <FaBootstrap className="text-purple-500" title="Bootstrap" />
              <FaNodeJs className="text-green-500" title="Node.js" />
              <SiMongodb className="text-green-600" title="MongoDB" />
              <SiFirebase className="text-yellow-500" title="Firebase" />
              <FaGithub className="text-white" title="GitHub" />
            </div>
          </Marquee>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
