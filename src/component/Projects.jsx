import React from "react";
import { Link } from "react-router";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
  FaInfoCircle,
} from "react-icons/fa";
import { useState, useRef } from "react"; // Add this

// Badge color map by tech stack
const techColors = {
  React: "#61DAFB",
  Tailwind: "#38BDF8",
  "Tailwind CSS": "#38BDF8",
  "Node.js": "#3C873A",
  MongoDB: "#4DB33D",
  Firebase: "#FFCA28",
  Express: "#999999",
  JavaScript: "#F7DF1E",
  HTML: "#E44D26",
  CSS: "#264de4",
  Bootstrap: "#7952B3",
};

const FeaturedProjects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  return (
    <section
      className="bg-[#1E1E2F]  text-white font-[Poppins] py-16 px-4 lg:px-16"
      id="works"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-[#FDCB6E] uppercase text-sm md:text-base tracking-widest">
            Some of my best works
          </p>
        </div>

        {/* Projects */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col overflow-hidden rounded-xl shadow-md lg:flex-row ${
              project.reverse ? "lg:flex-row-reverse" : ""
            } bg-[#323647]`}
          >
            {/* Image */}

            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full lg:h-[450px] lg:w-1/2 object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Content */}
            <div className="flex flex-col justify-center flex-1 p-6 md:p-10 space-y-1">
              <span className="text-xs uppercase text-[#FDCB6E] tracking-widest">
                Featured Project
              </span>
              <h3 className="text-xl md:text-3xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-[#cccccc] text-sm md:text-base leading-relaxed">
               {project.desc}</p>
              <p className="text-[#cccccc] text-sm md:text-base leading-relaxed">
                <span className="text-yellow-400">Challenge :</span> {project.challenge}</p>
              <p className="text-[#cccccc] text-sm md:text-base leading-relaxed">
              <span className="text-yellow-400">Goal : </span>  {project.goal}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: techColors[tech] || "#444",
                      color:
                        tech === "JavaScript" || tech === "Firebase"
                          ? "#000"
                          : "#fff",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {/* Live */}
                <Link
                  to={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-md font-semibold transition"
                >
                  <FaExternalLinkAlt /> Live
                </Link>

                {/* Client */}
                <Link
                  to={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 bg-[#3A3D4D] hover:bg-[#4a4f63] text-white rounded-md transition"
                >
                  <FaGithub /> Client
                </Link>

                {/* Server */}
                {project.server && project.server !== "#" && (
                  <Link
                    to={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 bg-[#3A3D4D] hover:bg-[#4a4f63] text-white rounded-md transition"
                  >
                    <FaServer /> Server
                  </Link>
                )}

                {/* Details */}
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    modalRef.current?.showModal(); // open modal
                  }}
                  className="flex items-center gap-2 text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-md transition"
                >
                  <FaInfoCircle /> Details
                </button>
              </div>
            </div>
          </div>
        ))}
        <dialog id="projectModal" className="modal" ref={modalRef}>
          <div className="modal-box max-w-3xl bg-[#1E1E2F] text-white">
            <h3 className="font-bold text-2xl mb-4">
              {selectedProject?.title}
            </h3>
            <img
              src={selectedProject?.screenshot}
              alt={selectedProject?.title}
              className="w-full md:h-80 lg:h-96 object-cover rounded mb-4"
            />
            <p className="mb-4 text-gray-300">{selectedProject?.details}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject?.tech?.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: techColors[tech] || "#444",
                    color:
                      tech === "JavaScript" || tech === "Firebase"
                        ? "#000"
                        : "#fff",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-yellow-400 text-black hover:bg-yellow-300">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default FeaturedProjects;
