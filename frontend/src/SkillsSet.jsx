import React from 'react'


import ProfilePic from "../src/assets/ProfilePic.jpg";
import  Phone  from "../src/assets/Phone.png";
import  whatsapp from "../src/assets/whatsapp.png";
import  github from "../src/assets/github.png";
import  x from "../src/assets/x.png";

 const SkillsSet = (props) => {
  return (
    <div  className='main-div1'>

<div  className='card1'>
          <h2 className="header1"> {props.heading}</h2>
       
          
         <ul>
         <li className="card-text2"> <img src={github} alt=" ProfilePic" /> {props.items}</li>
         <li className="card-text2"> <img src={x} alt=" ProfilePic" /> {props.items0}</li>
         </ul>
         <ul>
          <li className="card-text2"> Email: {props.items1}</li>
          <li className="card-text2"> Email 2 : {props.items2}</li>
          <li className="card-text2">  <img src={whatsapp} alt=" ProfilePic" /> {props.items3}</li>
          <li className="card-text2">  <img src={Phone} alt=" ProfilePic" /> {props.items4}</li>
        </ul>
      </div>


    </div>
  )
}
export default SkillsSet;