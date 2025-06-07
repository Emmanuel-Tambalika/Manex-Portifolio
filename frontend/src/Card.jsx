import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <p className="card-text">{props.ProjectNumber}</p>
      <p className="card-text2">Name: {props.name}</p>
      <p className="card-text3">{props.description}</p>
      <p className="card-text4">
        DevStatus: {props.isDevStatus ? 'Complete' : 'Still in Production'}
      </p>
      <p className="card-text5">Progress: {props.Progress}</p>

      <button className="View-Page" type="button">
        <span className="card-text">{props.items}</span>
      </button>
    </div>
  );
};

export default Card;



