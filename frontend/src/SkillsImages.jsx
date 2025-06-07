import React from 'react';

import react from "../src/assets/react.svg";
import express from "../src/assets/express.png";
import Django from "../src/assets/Django.png";
import MongoDb from "../src/assets/MongoDb.png";
import PhP from "../src/assets/PhP.png";
import SQL from "../src/assets/SQL.png";
import Python from "../src/assets/Python.png";
import TailWindCss from "../src/assets/TailWindCss.png";
import ReNative from "../src/assets/ReNative.png";
import javaScript from "../src/assets/javascript.png";

const SkillsImages = (props) => {
  const skills = [
    { label: props.items, icon: react, alt: "React" },
    { label: props.items1, icon: express, alt: "Express" },
    { label: props.items2, icon: MongoDb, alt: "MongoDb" },
    { label: props.items3, icon: TailWindCss, alt: "TailWindCss" },
    { label: props.items5, icon: Django, alt: "Django" },
    { label: props.items6, icon: SQL, alt: "SQL" },
    { label: props.items7, icon: javaScript, alt: "JavaScript" },
    { label: props.items8, icon: PhP, alt: "PHP" },
    { label: props.items9, icon: Python, alt: "Python" },
    { label: props.items11, icon: ReNative, alt: "React Native" },
  ];

  return (
    <div className="main-div1">
      <div className="card1">
        <h2 className="header1">{props.heading}</h2>
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <img
                src={skill.icon}
                alt={skill.alt}
                className="skill-icon"
                loading="lazy"
              />
              <span className="skill-label">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsImages;
