import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#1E1E2F] text-white py-16 px-4 md:px-20 bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
          About Me
        </h2>
        <p className="text-[#FDCB6E] uppercase text-sm md:text-base tracking-widest mb-5 md:mb-8">
          Who I Am
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <Fade>
            <div>
              <p className="text-[#cccccc] leading-relaxed text-sm md:text-base mb-6">
                I’m a passionate{" "}
                <span className="text-white font-medium">
                  MERN Stack Developer
                </span>{" "}
                based in Bangladesh with a strong focus on frontend. I enjoy
                crafting interactive, accessible, and scalable web applications.
              </p>
              <p className="text-[#cccccc] leading-relaxed">
                I'm currently studying BSc in
                <span className="text-white font-medium"> Physics, </span> but
                coding is my true passion. That’s why I chose{" "}
                <span className="text-white font-medium">
                  {" "}
                  frontend development
                </span>{" "}
                as my career—because we should all do what we love.
              </p>
            </div>
          </Fade>

          {/* Skills or Highlights */}
          <div className="space-y-3">
            {/* Work Style */}
            <Fade>
              <div className="bg-[#242734] p-4 rounded-xl">
                <h4 className="text-white font-semibold">Work Style</h4>
                <p className="text-[#cccccc] mt-2 text-sm">
                  I love clean, minimal designs, write reusable code, and prefer
                  simplicity over complexity.
                </p>
              </div>
            </Fade>

            {/* Mindset */}
            <Fade>
              <div className="bg-[#2B2B3C] p-4 rounded-xl">
                <h4 className="text-white font-semibold">Mindset</h4>
                <p className="text-[#cccccc] mt-2 text-sm">
                  I believe in focused learning, self-discipline, and improving
                  1% every day.
                </p>
              </div>
            </Fade>

            {/* YouTube Mission */}
            <Fade>
              <div className="bg-[#2B2B3C] p-4 rounded-xl">
                <h4 className="text-white font-semibold">Content Creator</h4>
                <p className="text-[#cccccc] mt-2 text-sm">
                  I create self-development videos on YouTube to help learners
                  grow with structure and clarity.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
