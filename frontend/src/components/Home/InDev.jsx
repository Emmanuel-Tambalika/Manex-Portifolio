import React from 'react';
import Card from '../../Card';

export const InDev = () => (
  <div
    className="cards-wrapper"
    style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: "repeat(1, 1fr)",
      margin: "0 auto",
      width: "100%",
      maxWidth: 1050,
    }}
  >
    <Card
      ProjectNumber="Project 2"
      name="CoreStatus"
      description="Through anonymous interaction, we help organizations gather invaluable and raw feedback from employees and partners that is normally difficult to share due to fear of social penalty."
      isDevStatus={false}
      Progress="40%"
      items={<a href="#" style={{ color: "#356cf5", textDecoration: "underline" }}>Live Soon</a>}
    />
    <Card
      ProjectNumber="Project 3"
      name="InternUp"
      description="Helps organizations manage their internship placements. Instead of only responding to students who reach out, they can prospect suitable students and manage the process easily."
      isDevStatus={false}
      Progress="35%"
      items={<a href="#" style={{ color: "#356cf5", textDecoration: "underline" }}>Live Soon</a>}
    />
    <Card
      ProjectNumber="Project 4"
      name="OdioGram"
      description="A short-form audio media platform. Supports audio as the main medium of communication, making high-quality content creation quick and less logistically demanding."
      isDevStatus={false}
      Progress="<10%"
      items={<a href="#" style={{ color: "#356cf5", textDecoration: "underline" }}>Live Soon</a>}
    />
    <Card
      ProjectNumber="Project 4"
      name="YouthFul"
      description="A social media platform connecting youth around the globe, helping them network and support each other. More youth can succeed if the ecosystem is supportive."
      isDevStatus={false}
      Progress="<10%"
      items={<a href="#" style={{ color: "#356cf5", textDecoration: "underline" }}>Live Soon</a>}
    />
    <Card
      ProjectNumber="Project 5"
      name="Writeful"
      description="Digitally connects writers and readers. Writers reach new markets and enjoy recurring income while readers get unlimited books via subscription."
      isDevStatus={false}
      Progress="<10%"
      items={<a href="#" style={{ color: "#356cf5", textDecoration: "underline" }}>Live Soon</a>}
    />
    <Card
      ProjectNumber="Project 6"
      name="HotTopic"
      description="Allows anonymous users to share sensitive topics and get feedback from others. Helpful for those seeking advice or support online."
      isDevStatus={false}
      Progress="<10%"
      items={<a href="#" style={{ color: "#356cf5", textDecoration: "underline" }}>Live Soon</a>}
    />
    {/* Responsive columns */}
    <style>{`
      @media (min-width: 730px) {
        .cards-wrapper { grid-template-columns: repeat(2, 1fr) !important;}
      }
      @media (min-width: 1050px) {
        .cards-wrapper { grid-template-columns: repeat(3, 1fr) !important;}
      }
    `}</style>
  </div>
);

export default InDev;

