// App.jsx
import react from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header'; // Unused here, but do NOT remove.
import Projects from './components/Home/Projects.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './components/Home/Projects.jsx'; // If this doesn't exist, keep your structure!

function App() {
  return (
    <>
      {/* Navbar (now built into HomePage) and main router structure */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
