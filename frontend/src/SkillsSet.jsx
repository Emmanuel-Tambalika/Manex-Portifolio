import React from 'react';
import Phone from "../src/assets/Phone.png";
import Whatsapp from "../src/assets/whatsapp.png";
import Github from "../src/assets/github.png";

const SkillsSet = (props) => {
  return (
    <div className="main-div1">
      <div className="card1">
        <h2 className="header1">{props.heading}</h2>
        <ul className="skills-grid1">
          <li className="card-text2">
            <img src={Github} alt="GitHub Profile" className="icon" /> {props.items}
          </li>
          <li className="card-text2">Email: {props.items1}</li>
          <li className="card-text2">Email 2: {props.items2}</li>
          <li className="card-text2">
            <img src={Whatsapp} alt="WhatsApp" className="icon" /> {props.items3}
          </li>
          <li className="card-text2">
            <img src={Phone} alt="Phone" className="icon" /> {props.items4}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSet;
