import React from 'react';
import AboutMe from '../../component/AboutMe';
import Skills from '../../component/Skills';
import Projects from '../../component/Projects';
import ContactMe from '../../component/ContactMe';
import Education from '../../component/Education';
import { useLoaderData } from 'react-router';

const Home = () => {
  const projects = useLoaderData();
  return (
    <div>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projects projects={projects}></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;