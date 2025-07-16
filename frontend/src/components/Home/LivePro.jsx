import React from 'react';
import Card from '../../Card';

export const LivePro = () => (
  <div
    className="cards-wrapper"
    style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: "repeat(1, 1fr)",
      margin: "0 auto",
      width: "100%",
      maxWidth: 1050,
      justifyContent: "center"
    }}
  >
    <Card
      ProjectNumber="Project 1"
      name="LessonHunt"
      description="A unique platform where every life experience becomes a valuable lesson. Share stories (anonymously or openly), inspire, and empower others through wisdom gained on your journey."
      isDevStatus={true}
      Progress="80%"
      items={<a href="https://lessonhunt.netlify.app" style={{ color: "#356cf5", textDecoration: "underline" }}>Visit Site</a>}
      items1={<a href="https://github.com/Emmanuel-Tambalika" style={{ color: "#356cf5", textDecoration: "underline" }}> GitHub </a>}
    />
    <style>{`
      /* If more cards are added later, grid expands cleanly: */
      @media (min-width: 730px) {
        .cards-wrapper { grid-template-columns: repeat(2, 1fr) !important;}
      }
      @media (min-width: 1050px) {
        .cards-wrapper { grid-template-columns: repeat(3, 1fr) !important;}
      }
    `}</style> 
  </div>
);

export default LivePro;
