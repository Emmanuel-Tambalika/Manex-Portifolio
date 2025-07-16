import React, { useState } from 'react';
import InDev from './InDev';
import LivePro from './LivePro';

const ProjectsPage = () => {
  const [showDevelopment, setShowDevelopment] = useState(false);

  return (
    <div
      className="w-full max-w-5xl mx-auto flex flex-col items-center px-4 py-6"
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      <div className="w-full">
        {/* Responsive toggle button row */}
        <div
          className="projects-toggle-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.1rem",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2.2rem",
            width: "100%"
          }}
        >
          <button
            className={`proj-toggle-btn ${!showDevelopment ? "active" : ""}`}
            style={{
              minWidth: 120,
              fontSize: "1rem",
              padding: "0.8rem 1.6rem",
              borderRadius: "1.2rem",
              boxShadow: !showDevelopment ? "0 2px 12px #eadaf5" : "",
              background: !showDevelopment ? "linear-gradient(90deg, #fbe127 20%, #ffcccc 100%)" : "#eee",
              color: !showDevelopment ? "#321064" : "#333",
              fontWeight: 600,
              border: 0,
              outline: 0,
              transition: "0.17s",
              cursor: "pointer",
            }}
            onClick={() => setShowDevelopment(false)}
            aria-pressed={!showDevelopment}
          >
            In Development
          </button>
          <button
            className={`proj-toggle-btn ${showDevelopment ? "active" : ""}`}
            style={{
              minWidth: 120,
              fontSize: "1rem",
              padding: "0.8rem 1.6rem",
              borderRadius: "1.2rem",
              boxShadow: showDevelopment ? "0 2px 12px #f5dee7" : "",
              background: showDevelopment ? "linear-gradient(90deg, #fbc427 30%, #ecadea 100%)" : "#eee",
              color: showDevelopment ? "#d11b5b" : "#333",
              fontWeight: 600,
              border: 0,
              outline: 0,
              transition: "0.17s",
              cursor: "pointer",
            }}
            onClick={() => setShowDevelopment(true)}
            aria-pressed={showDevelopment}
          >
            Live Projects
          </button>
        </div>
        {showDevelopment ? <LivePro /> : <InDev />}
      </div>
      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 500px) {
          .projects-toggle-row { flex-direction: column !important; gap: 0.6rem !important;}
          .proj-toggle-btn { width: 100% !important; min-width: 0 !important;}
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
