import React from 'react';
import './App.css';
import ProfilePic from "../src/assets/ProfilePic.jpg";
import IntroductionCard from './IntroductionCard.jsx';

const Header = () => (
  <header
    className="main-div"
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "2.6rem",
      padding: "2.4rem 1rem 1rem 1rem",
      background: "linear-gradient(100deg, #f4f6fd 0%, #dbf3ff 100%)",
      borderRadius: "24px",
      boxShadow: "0 10px 32px #c0d4f315",
    }}
  >
    {/* Modern Block: Photo + Intro Card side-by-side or stacked */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.8rem",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: 1050,
        margin: "0 auto 1.5rem auto",
        background: "#f8fafdcc",
        borderRadius: "20px",
        boxShadow: "0 3px 34px #d7e5f270",
        padding: "2.2rem 2vw", // extra space for large screens
      }}
      className="header-row"
    >
      {/* Profile Picture (left on large, top on mobile) */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        <img
          src={ProfilePic}
          alt="ProfilePic"
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3.5px solid #7151da",
            boxShadow: "0 3px 14px #bdbff63a",
            background: "#fff",
            margin: "0 auto",
            display: "block",
            transition: "box-shadow 0.18s, border 0.18s",
          }}
        />
      </div>

      {/* Introduction card (right on large, below image on mobile) */}
      <div style={{ flex: 1, minWidth: 210, maxWidth: 620 }}>
        <IntroductionCard
          description="Hello, I'm Emmanuel. A committed software developer. Below you'll find my Portfolio Projects, Skills, and Contact Info."
          ThankYou="Thank You and Enjoy!"
        />
      </div>
    </div>

    {/* CV / Resume button */}
    <div style={{
      marginTop: '1.5rem',
      textAlign: 'center',
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}>
      <a
        href="/Emmanuel_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:-translate-y-1 active:scale-95"
        style={{ fontSize: '1.07rem', fontWeight: 600 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
        </svg>
        View My CV
      </a>
    </div>

    {/* Responsive tweaks for mobile/tablet */}
    <style>{`
      @media (max-width: 1000px) {
        .header-row { gap: 1.5rem !important; padding: 1.3rem 1vw !important;}
        .header-row img { width: 76px !important; height: 76px !important;}
      }
      @media (max-width: 660px) {
        .header-row { flex-direction: column !important; align-items: center !important; max-width: 96vw !important;}
        .header-row img { width: 54px !important; height: 54px !important;}
      }
      @media (max-width: 410px) {
        .header-row { padding: 1rem 0.2rem !important;}
        .header-row img { width: 38px !important; height: 38px !important;}
      }
    `}</style>
  </header> 
);

export default Header;
