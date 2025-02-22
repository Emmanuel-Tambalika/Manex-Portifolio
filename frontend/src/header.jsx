import React from 'react';
import './App.css';
import ProfilePic from "../src/assets/ProfilePic.jpg";
import ContactCard from './SkillsImages.jsx';
import IntroductionCard from './IntroductionCard.jsx';

   
 const header = () => {
    
  return (
    <div  >
      <h1  className='header1'>Manex's Portoflio.</h1>
        
        <nav className='nav-bar'>
          
      <IntroductionCard
       description ="Hello i'm Emmanuel . A committed software developer  , 
       Below  You'll find my Portolio Projects   , Skills and Contact Info. " 
       ThankYou="Thank You and Enjoy!"
      />
      <img src={ProfilePic}  alt=" ProfilePic" />
        </nav>  
    </div>
  )
}
export default header;