import React from 'react'

const IntroductionCard = (props) => {
  return (
    <div
      className='main-div1'
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto 1.5rem auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className='card2' style={{
        width: "100%",
        boxSizing: "border-box",
      }}>
        <p className="card-text3" style={{ fontSize: "1.05rem", marginBottom: "0.8rem" }}> {props.description}</p>
        <label style={{ fontSize: "1.1rem" }}>{props.ThankYou}</label>
      </div>
      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 480px) {
          .card2 { font-size: 0.93rem !important; padding: 1rem !important;}
        }
      `}</style>
    </div>
  )
}
export default IntroductionCard;
