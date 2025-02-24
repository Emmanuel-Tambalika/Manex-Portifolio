import React from 'react';


// Add the correct SkillsSaets Images Here . 

import ProfilePic from "../src/assets/ProfilePic.jpg";
import Icon from "../src/assets/icon.png";
import react from "../src/assets/react.svg";
import express from "../src/assets/express.png";
import Django from "../src/assets/Django.png";
import  MongoDb from "../src/assets/MongoDb.png";
import  PhP from "../src/assets/PhP.png";
import  SQL from "../src/assets/SQL.png";
import python from "../src/assets/python.png";
import TailWindCss from "../src/assets/TailWindCss.png";
import ReNative from "../src/assets/ReNative.png"
import javaScript from "../src/assets/javascript.png";


 const SkillsImages = (props) => {
  return (
    <div className='main-div1'>
        <div  className='card1'>
          <h2 className="header1"> {props.heading}</h2>
       
        <ul>
          <li className="card-text3">  {props.items}<img src={react} alt=" react" /></li>
          <li className="card-text2">  {props.items1}<img src={express} alt=" express" /></li>
          <li className="card-text3">  {props.items2} <img src={MongoDb} alt=" MongoDb" /> </li>
          <li className="card-text2">  {props.items3}<img src={TailWindCss} alt="TailWindCss " /></li>
          
          <li className="card-text2">  {props.items5}<img src={Django} alt=" Django" /></li>
          <li className="card-text3">  {props.items6}<img src={SQL} alt="SQL" /></li>
          <li className="card-text2">  {props.items7} <img src={javaScript} alt="javaScript" /></li> 
          <li className="card-text3">  {props.items8}<img src={PhP} alt=" PHP" /> </li>
          <li className="card-text2">   {props.items9}<img src={python} alt="python" /> </li>
         
          <li className="card-text2"> {props.items11}<img src={ReNative} alt=" Icon" /> </li>
         
          </ul>
           
      </div>
    </div>  
  )
}
export default SkillsImages;