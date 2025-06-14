import React, { useRef } from 'react';
import Header from '../header';
import Projects from '../components/Home/Projects.jsx';
import SkillsImages from '../SkillsImages.jsx';
import SkillsSet from '../SkillsSet.jsx';


const HomePage = () => {
  // Refs for scrolling
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Main Title */}
      <h1 className="header1 mt-4 mb-2">Manex's Portfolio.</h1>

     <nav className="flex flex-wrap justify-center my-5 gap-3">
  <button
    className="px-5 py-2 bg-gradient-to-r from-amber-500 via-red-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:via-red-600 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-transform transform hover:-translate-y-1 active:scale-95"
    onClick={() => scrollToSection(projectsRef)}
  >
    Projects
  </button>
  <button
    className="px-5 py-2 bg-gradient-to-r from-amber-500 via-red-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:via-red-600 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-transform transform hover:-translate-y-1 active:scale-95"
    onClick={() => scrollToSection(skillsRef)}
  >
    Skills
  </button>
  <button
    className="px-5 py-2 bg-gradient-to-r from-amber-500 via-red-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:via-red-600 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-transform transform hover:-translate-y-1 active:scale-95"
    onClick={() => scrollToSection(contactRef)}
  >
    Contact
  </button>
</nav>


      {/* Header Section */}
      <Header />

      {/* Projects Section */}
      <div ref={projectsRef} className="mt-10">
        <Projects />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className="mt-30">
        <SkillsImages
          heading="Skillsets"
          items="React.js"
          items1="Express.js"
          items2="MongoDb"
          items3="TailwindCss"
          items5="Django"
          items6="SQL"
          items7="JavaScript"
          items8="PHP"
          items9="Python"
          items11="React Native"
        />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="contact-section section-container mt-30">
        <SkillsSet
          heading="Contact and Ref."
          items={<a href="https://github.com/Emmanuel-Tambalika">GitHub</a>}
          items1="ManexTyc@gmail.com"
          items2="m2384b@students.msuas.ac.zw"
          items3="+263733319807"
          items4="+263718247858"
        />
      </div>
    </div>
  );
};

export default HomePage;
