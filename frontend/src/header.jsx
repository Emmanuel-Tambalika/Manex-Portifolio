import React from 'react';
import './App.css';
import ProfilePic from "../src/assets/ProfilePic.jpg";
import ContactCard from './SkillsImages.jsx';
import IntroductionCard from './IntroductionCard.jsx';

const Header = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <IntroductionCard
          description="Hello I'm Emmanuel. A committed software developer, 
          below you'll find my Portfolio Projects, Skills, and Contact Info."
          ThankYou="Thank You and Enjoy!"
        />
        <img src={ProfilePic} alt="ProfilePic" />

        {/* CV Download/Open Button */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a
            href="/Emmanuel_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:-translate-y-1 active:scale-95"
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
       
      </nav>
    </div>
  );
};

export default Header;
