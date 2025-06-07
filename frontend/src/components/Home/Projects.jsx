import React, { useState } from 'react';
import InDev from './InDev';
import LivePro from './LivePro';


const ProjectsPage = () => {
  const [showDevelopment, setShowDevelopment] = useState(false); // Default to Live Projects

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Button container: full width, center content */}
      <div className="w-full max-w-md flex justify-center mb-8 mt-6">
        {/* Buttons wrapper with responsive spacing and wrapping */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <button
            className={`View-Page px-6 py-2 font-semibold rounded border-2 transition-transform duration-200 ease-in-out focus:outline-none ${!showDevelopment
                ? 'bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-pink-900 border-pink-400 shadow-lg scale-105 hover:from-pink-500 hover:via-pink-400 hover:to-yellow-400 focus:ring-4 focus:ring-pink-200'
                : 'bg-gray-200 text-black border-transparent hover:bg-pink-100 focus:ring-0'
              }`}
            style={{ minWidth: 140 }}
            onClick={() => setShowDevelopment(false)}
            aria-pressed={!showDevelopment}
          > In Development
           
          </button>

          <button
            className={`View-Page px-6 py-2 font-semibold rounded border-2 transition-transform duration-200 ease-in-out focus:outline-none ${showDevelopment
                ? 'bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-pink-900 border-pink-400 shadow-lg scale-105 hover:from-pink-500 hover:via-pink-400 hover:to-yellow-400 focus:ring-4 focus:ring-pink-200'
                : 'bg-gray-200 text-black border-transparent hover:bg-pink-100 focus:ring-0'
              }`}
            style={{ minWidth: 140 }}
            onClick={() => setShowDevelopment(true)}
            aria-pressed={showDevelopment}
          >
            Live Projects
          </button>

        </div>
      </div>

      {/* Projects content centered */}
      <div className="w-full max-w-5xl flex justify-center">
        {showDevelopment ? <LivePro/> : < InDev  />}
      </div>
    </div>
  );
};

export default ProjectsPage;
