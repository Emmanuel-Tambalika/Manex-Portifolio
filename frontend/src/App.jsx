import react from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Projects from './components/Home/Projects.jsx';
import HomePage from './pages/HomePage.jsx';
import Home from './pages/Home.jsx';

function App() {
 
  return (
   <>
   <Header/>
   <HomePage/>
    <Projects/>
    
    </>
    
  )
}

export default App
