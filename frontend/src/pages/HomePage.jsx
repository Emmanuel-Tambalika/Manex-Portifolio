import React, { useRef, useEffect, useState } from 'react';
import Header from '../header';
import Projects from '../components/Home/Projects.jsx';
import SkillsImages from '../SkillsImages.jsx';
import SkillsSet from '../SkillsSet.jsx';

// Section IDs for scroll spying
const SECTIONS = [
  { id: 'intro', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const HomePage = () => {
  // refs for each section
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Which section is active (for nav highlight)
  const [activeSection, setActiveSection] = useState('intro');

  // Scroll to section on nav click
  const scrollTo = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Update nav highlight on scroll
  useEffect(() => {
    // Helper: get section and offset from top of window
    const getSectionTops = () => [
      { id: 'intro', top: introRef.current?.getBoundingClientRect().top ?? Infinity },
      { id: 'projects', top: projectsRef.current?.getBoundingClientRect().top ?? Infinity },
      { id: 'skills', top: skillsRef.current?.getBoundingClientRect().top ?? Infinity },
      { id: 'contact', top: contactRef.current?.getBoundingClientRect().top ?? Infinity },
    ];

    const onScroll = () => {
      const scrollOffset = 90; // compensate for sticky navbar height
      const positions = getSectionTops()
        .map(({ id, top }) => ({ id, dist: Math.abs(top - scrollOffset) }))
        .sort((a, b) => a.dist - b.dist);
      setActiveSection(positions[0].id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="w-full max-w-7xl mx-auto px-2 py-4"
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        background: "var(--color-bg-light, #f7f7fb)"
      }}
    >
      {/* Modern sticky navbar */}
      <nav
        className="sticky top-0 z-40 border-b border-gray-200 shadow-sm bg-white/90 backdrop-blur"
        style={{
          display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "space-between",
          gap: "1rem", padding: "0.85rem 4vw 0.85rem 2vw", minHeight: 70, marginBottom: "2rem"
        }}
      >
        <span
          className="font-extrabold text-xl md:text-2xl tracking-tight text-indigo-700"
          style={{
            letterSpacing: "1.1px",
            fontWeight: 800,
            color: "#312077",
            textShadow: "0 1px 8px #e7eaf739",
            whiteSpace: "nowrap"
          }}
        >
          Manex Portfolio
        </span>
        <ul
          className="flex gap-8 font-medium"
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.2rem",
            alignItems: "center",
            margin: 0,
            padding: 0
          }}
        >
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() =>
                  scrollTo(
                    id === 'intro'
                      ? introRef
                      : id === 'projects'
                        ? projectsRef
                        : id === 'skills'
                          ? skillsRef
                          : contactRef
                  )
                }
                className={`outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 transition
                  ${activeSection === id ? 'font-bold text-indigo-700 underline' : 'hover:text-indigo-700'}
                `}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1rem",
                  padding: "0.5em 0.6em",
                  cursor: "pointer"
                }}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <style>{`
          @media (max-width: 700px) {
            nav { flex-direction: column; align-items: stretch; gap: 0.5rem;}
            ul { justify-content: center; gap: 0.8rem;}
            span { font-size: 1.08rem !important;}
          }
        `}</style>
      </nav>

      {/* MODERN HERO/INTRODUCTION */}
      <section
        id="intro"
        ref={introRef}
        className="intro-section hero"
        style={{
          minHeight: "46vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "3.5rem 2vw 2.3rem 2vw",
          background: "linear-gradient(110deg, #e8eafb 0%, #fffbe8 100%)",
          borderRadius: "24px",
          boxShadow: "0 8px 34px #e5e5ee56",
          marginBottom: "2.5rem"
        }}
      >
        <Header />
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        ref={projectsRef}
        style={{
          margin: "3.2rem 0 2.7rem 0",
          scrollMarginTop: "90px",
        }}
      >
        <Projects />
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        ref={skillsRef}
        style={{
          margin: "3.2rem 0 2.7rem 0",
          scrollMarginTop: "90px",
        }}
      >
        <SkillsImages
          heading="Skillsets"
          items="React.js"
          items1="Express.js"
          items2="MongoDb"
          items3="TailwindCss"
          items7="JavaScript"
          items8="PHP"
          items9="Python"
          items11="React Native"
        />
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        ref={contactRef}
        style={{
          margin: "4.2rem 0 1.5rem 0",
          scrollMarginTop: "90px",
        }}
      >
        <SkillsSet
          heading="Contact"
          items={<a href="https://github.com/Emmanuel-Tambalika" className="text-indigo-700 underline">GitHub</a>}
          items1="manextyc@gmail.com"
          items3="0733319807"
          items4="0718247858"
        />
      </section>
    </div> 
  );
};

export default HomePage;
