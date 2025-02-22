import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Home/Projects';
import HomePage from './HomePage';
import header from '../header';

import   '../App.css'

const Home = () => {  

   // Used this to learn About React Router 
  const [showType ,setShowType]=useState('table');
  

  return (
    <div className=''>
      <div className='View-Page2'>
      <button className='View-Page'
      onClick={() => setShowType('table')}
      >
       Projects
      </button>

      <button
      className='View-Page1'
      onClick={()=> setShowType('card')}
      >
       Skills
      </button>

      </div>

      <div className=''>
        <h1 className='header1' >   Manex Portfilio</h1>
        
      </div>
      {
             
         showType ==='table' ? (<Projects/> ): (<HomePage/>)
         
      }
      
    </div>
  );


};

export default Home;