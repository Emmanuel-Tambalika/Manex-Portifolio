import React from 'react';


// Add the correct SkillsSaets Images Here . 

import ProfilePic from "../src/assets/ProfilePic.jpg";
import Icon from "../src/assets/icon.png";
import react from "../src/assets/react.svg"


 const SkillsImages = (props) => {
  return (
    <div className='main-div1'>
        <div  className='card1'>
          <h2 className="header1"> {props.heading}</h2>
       
        <ul>
          <li className="card-text3">  {props.items}<img src={react} alt=" ProfilePic" /></li>
          <li className="card-text2">  {props.items1}<img src={ProfilePic} alt=" ProfilePic" /></li>
          <li className="card-text3">  {props.items2} <img src={Icon} alt=" ProfilePic" /> </li>
          <li className="card-text2">  {props.items3}<img src={ProfilePic} alt=" Icon" /></li>
          <li className="card-text3">  {props.items4} <img src={react} alt=" ProfilePic" /></li>
          <li className="card-text2">  {props.items5}<img src={ProfilePic} alt=" ProfilePic" /></li>
          <li className="card-text3">  {props.items6}<img src={react} alt=" ProfilePic" /></li>
          <li className="card-text2">  {props.items7} <img src={Icon} alt=" Icon" /></li> 
          <li className="card-text3">  {props.items8}<img src={ProfilePic} alt=" ProfilePic" /> </li>
          <li className="card-text2">   {props.items9}<img src={Icon} alt=" Icon" /> </li>
         
          <li className="card-text2"> {props.items11}<img src={Icon} alt=" Icon" /> </li>
         
          </ul>
           
      </div>
    </div>  
  )
}
export default SkillsImages;