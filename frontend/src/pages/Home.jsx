import React, { useState } from 'react';
import Projects from '../components/Home/Projects';
import HomePage from './HomePage';
import '../App.css';

const Home = () => {
  const [showType, setShowType] = useState('table');

  return (
    <div
      className=""
      style={{
        width: "100%",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1.5rem 0.5rem",
        background: "var(--color-bg-light, #f7f7fb)"
      }}
    >
      {/* Responsive Toggle Button Row */}
      <div
        className="View-Page2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2.7rem"
        }}
      >
        <button
          className="View-Page"
          onClick={() => setShowType('table')}
          style={{
            minWidth: 120,
            fontSize: "1rem",
            padding: "0.8rem 1.6rem",
            margin: 0,
          }}
          aria-pressed={showType === "table"}
        >
          Projects
        </button>

        <button
          className="View-Page1"
          onClick={() => setShowType('card')}
          style={{
            minWidth: 120,
            fontSize: "1rem",
            padding: "0.8rem 1.6rem",
            margin: 0,
          }}
          aria-pressed={showType === "card"}
        >
          Skills
        </button>
      </div>
      <div style={{ width: "100%" }}>
        {showType === 'table' ? <Projects /> : <HomePage />}
      </div>
      {/* Responsive tweaks for wrapping btns */}
      <style>{`
        @media (max-width: 540px) {
          .View-Page2 { flex-direction: column !important; gap: 0.6rem !important;}
          .View-Page, .View-Page1 { width: 100% !important; min-width: 0 !important; }
        }
      `}</style>
    </div>
  ); 
};

export default Home;
