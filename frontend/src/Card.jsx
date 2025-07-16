import React from 'react';

const Card = ({
  ProjectNumber,
  name,
  description,
  items,
  items1,
  Progress,
  isDevStatus,
}) => (
  <div
    className="card transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] focus-within:shadow-2xl border-2 border-gray-400"
    style={{
      width: "100%",
      maxWidth: 350,
      minWidth: 0,
      boxSizing: "border-box",
      margin: "0.7rem auto",
      padding: "1.5rem 1.1rem",
      background: "#f9f9fd",
    }}
  >
    <label
      className="text-xs font-bold text-gray-500 mb-2 tracking-wider"
      style={{
        fontSize: "0.82rem",
        marginBottom: "0.18rem",
        display: "block"
      }}
    >
      {ProjectNumber}
    </label>
    <h3
      className="text-lg font-extrabold text-indigo-800 mb-1"
      style={{
        fontWeight: 700,
        fontSize: "1.19rem",
        margin: "0.18rem 0 0.41rem 0",
        wordBreak: "break-word",
        minHeight: 28,
        letterSpacing: 1,
        overflowWrap: "break-word",
      }}
    >
      {name}
    </h3>
    <p className="card-text3 mb-2" style={{
      fontSize: "1.00rem",
      fontWeight: 400,
      color: "#1c1546",
      margin: "0 0 0.7rem 0",
      wordBreak: "break-word"
    }}>
      {description}
    </p>
    {Progress && (
      <div className="card-text2 mt-2" style={{ fontSize: "0.98rem" }}>
        <span className="font-medium">{isDevStatus ? 'Progress:' : 'Status:'} </span>
        {Progress}
      </div>
    )}
    {items && (
      <div className="mt-2 text-base font-semibold" style={{ wordBreak: "break-all" }}>{items}</div>
    )}
    {items1 && (
      <div className="mt-2 text-base font-semibold" style={{ wordBreak: "break-all" }}>{items1}</div>
    )}
    {/* Responsive tweaks */}
    <style>{`
      @media (max-width: 480px) {
        .card { max-width: 95vw !important; padding: 1.1rem 0.6rem !important;}
        .card h3 { font-size: 1.04rem !important; }
      }
    `}</style>
  </div>
);

export default Card;



