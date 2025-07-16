import React from 'react';
import Phone from "../src/assets/Phone.png";
import Whatsapp from "../src/assets/whatsapp.png";
import Github from "../src/assets/github.png";

const contactStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 18px",
  borderRadius: "14px",
  background: "#fff",
  boxShadow: "0 1px 7px #ddf6fc40",
  marginBottom: "12px",
  minWidth: 0,       // CRITICAL: prevents children from pushing parent wider
  minHeight: 48,
  overflow: "hidden",
  flexWrap: "wrap",  // allows items to wrap if text is too long
};

const iconStyle = {
  width: 28,
  height: 28,
  borderRadius: 8,
  background: "linear-gradient(120deg, #faf3ff 45%, #e7fbfc 100%)",
  border: "1.4px solid #BBB5EE",
  objectFit: "contain",
  padding: "3px",
  boxShadow: "0 0 6px #eee9fd70",
  flexShrink: 0,
};

const labelStyle = {
  fontWeight: 600,
  marginRight: 4,
  color: "#1d2472",
  fontSize: "1.03rem",
  width: 82,
  minWidth: 55,
  lineBreak: "anywhere",
  display: 'inline-block',
};

const valueStyle = {
  color: "#193d12",
  fontWeight: 500,
  fontSize: "1.01rem",
  wordBreak: "break-word",
  lineBreak: "anywhere",
  flex: 1,
  minWidth: 0,
  // this ensures long email/phone will wrap not overflow
};

const SkillsSet = (props) => (
  <div className="main-div1" style={{ width: "100%" }}>
    <div
      className="card1"
      style={{
        background: "linear-gradient(123deg, #faffee 0%, #e6eaff 100%)",
        boxShadow: "0 8px 38px #e1ecf444",
        border: "2px solid #198067",
        maxWidth: 750,
        margin: "0 auto",
        padding: "2.2rem 2vw 2.2rem 2vw",
      }}
    >
      <h2
        className="header1"
        style={{
          color: "#176631",
          letterSpacing: "1.7px",
          textShadow: "1px 1px 0 #fff8, 1px 3px 16px #b5ffc8",
          marginBottom: "2.3rem",
          textAlign: "center"
        }}
      >
        {props.heading}
      </h2>
      {/* Responsive contact grid */}
      <div
        className="contact-info-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "22px",
          width: "100%",
          maxWidth: 660,
          margin: "0 auto",
        }}
      >
        {/* LEFT column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
          <div style={contactStyle}>
            <img src={Github} alt="GitHub Profile" style={iconStyle} />
            <span style={labelStyle}>GitHub:</span>
            <span style={valueStyle}>{props.items}</span>
          </div>
          <div style={contactStyle}>
            <span style={labelStyle}>Email:</span>
            <span style={valueStyle}>{props.items1}</span>
          </div>
         
        </div>
        {/* RIGHT column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
          <div style={{ ...contactStyle, border: "1.6px solid #7af4aa", background: "#f7fffa" }}>
            <img src={Whatsapp} alt="WhatsApp" style={{ ...iconStyle, background: "#e7fff0" }} />
            <span style={labelStyle}>WhatsApp</span>
            <span style={valueStyle}>{props.items3}</span>
          </div>
          <div style={{ ...contactStyle, border: "1.6px solid #8aaafc", background: "#f1f8ff" }}>
            <img src={Phone} alt="Phone" style={{ ...iconStyle, background: "#f2f7ff" }} />
            <span style={labelStyle}>Phone:</span>
            <span style={valueStyle}>{props.items4}</span>
          </div>
        </div>
      </div>
      {/* Responsive CSS for grid (collapses to 1 column on small screens, smooth font scaling) */}
      <style>{`
        @media (max-width: 800px) {
          .card1 { padding: 1.1rem 0.2rem !important;}
        }
        @media (max-width: 700px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
          .card1 { padding: 0.6rem 0.2rem !important;}
        }
        @media (max-width: 550px) {
          .header1 { font-size: 1rem !important;}
          .contact-info-grid { gap: 12px !important; }
          .card1 { padding: 0.35rem 0.08rem !important;}
          .main-div1 { padding-left: 0 !important; padding-right: 0 !important;}
        }
        @media (max-width: 400px) {
          .contact-info-grid { padding: 0 !important;}
          .card1 { border-width: 1px !important; }
          .header1 { font-size: 0.99rem !important;}
        }
        /* Avoid overlap: always wrap/make items fit */
        .card1 * { min-width: 0; }
      `}</style>
    </div>
  </div>
);

export default SkillsSet;


