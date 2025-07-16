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
    { label: props.items7, icon: javaScript, alt: "JavaScript" },
    { label: props.items, icon: react, alt: "React.js" },
    { label: props.items1, icon: express, alt: "Express.js" },
    { label: props.items2, icon: MongoDb, alt: "MongoDB" },
    { label: props.items3, icon: TailWindCss, alt: "Tailwind CSS" },
    { label: props.items8, icon: PhP, alt: "PHP" },
    { label: props.items9, icon: Python, alt: "Python" },
    { label: props.items11, icon: ReNative, alt: "React Native" },
  ];

  return (
    <div className="main-div1">
      <div
        className="card1"
        style={{
          background: "linear-gradient(100deg, #ffd70011 0%, #f8f8f8 90%)",
          boxShadow: "0 8px 34px #e5e5ee70",
          border: "2px solid #302973",
          margin: "0 auto",
        }}
      >
        <h2
          className="header1"
          style={{
            letterSpacing: '1px',
            marginBottom: "2.3rem",
            color: "#2b1978",
            textShadow: "1px 1px 0 #ffc, 2px 2px 10px #bbf9",
            textAlign: "center"
          }}
        >
          {props.heading}
        </h2>
        <ul
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "34px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            padding: 0,
            listStyle: "none",
            width: "100%",
            maxWidth: 800,
          }}
        >
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="skill-item"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 2px 14px #d9c3ff22",
                padding: "1rem .5rem .25rem .5rem",
                textAlign: "center",
                border: "1.5px solid #c7b7f5",
                minWidth: 0,
                transition: "box-shadow 0.16s",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.alt}
                style={{
                  width: 54,
                  height: 54,
                  objectFit: "contain",
                  margin: "0 auto 10px auto",
                  borderRadius: "10px",
                  background: "#faf9f7",
                  display: "block",
                  boxShadow: "0 1px 2.5px #d6c3ec",
                  maxWidth: "100%",
                }}
                loading="lazy"
              />
              <span
                className="skill-label"
                style={{
                  color: "#291066",
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  letterSpacing: "0.4px",
                  textShadow: "0 1px 5px #fff6, 0px 0px 0px #212",
                  wordBreak: "break-word"
                }}
              >
                {skill.label}
              </span>
            </li>
          ))}
        </ul>
        {/* Responsive CSS */}
        <style>{`
          @media (max-width: 900px) {
            .skills-grid { gap: 22px !important; }
          }
          @media (max-width: 660px) {
            .skills-grid { grid-template-columns: repeat(auto-fit, minmax(128px, 1fr)) !important; gap: 12px !important;}
            .skill-item { padding: 0.6rem 0.2rem 0.18rem 0.2rem !important; }
            .header1 { font-size: 1.16rem !important;}
          }
          @media (max-width: 400px) {
            .skills-grid { grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)) !important;}
            .skill-item img { width: 36px !important; height: 36px !important;}
          }
        `}</style>
      </div>
    </div>
  );
};

export default SkillsImages;
