import React from "react";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <section className="bg-[#323647] text-white font-[Poppins] py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Education
        </h2>
      <p className="text-[#FDCB6E] uppercase text-center text-sm md:text-base tracking-widest mb-10">Academic Qualifications</p>
        {/* Education Timeline */}
        <div className="grid md:grid-cols-2 gap-10 items-start relative">
          {/* Left side */}
          <Fade>
            <div className="space-y-2 text-right border-b-2 md:border-b-0 pb-8 md:pb-0 md:border-r-2 border-yellow-400 pr-10">
            <h3 className="font-semibold text-lg md:text-xl">
              National University, Gazipur
            </h3>
            <p className="text-[#cccccc] text-sm">
              B.Sc in Departement of Physics <br />
              2024–2027 (expected)
            </p>
          </div>
          </Fade>

          {/* Right side */}
          <Fade >
            <div className="space-y-2 pl-4">
            <h3 className="font-semibold text-lg md:text-xl">
              Government Barhamgonj College, Shibchar
            </h3>
            <p className="text-[#cccccc] text-sm">
              Higher Secondary Certificate in Science Background <br />
              2022
            </p>
          </div>
          </Fade>
        </div>
      </div>
      {/* <hr className="mt-10 w-[50%] mx-auto border-yellow-400 border-2 border-dashed"/> */}
    </section>
  );
};

export default Education;
