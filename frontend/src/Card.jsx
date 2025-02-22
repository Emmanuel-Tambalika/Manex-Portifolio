import  React from 'react';


import ProfilePic from "../src/assets/ProfilePic.jpg";
export const Card = (props) => {
    
  return (
        
    <div className="main-div">
       <div  className='card'>
        <p className="card-text" >{props.ProjectNumber} </p> 
        <p className="card-text2"> Name : {props.name}</p>
        <p className="card-text3">{props.description}</p>
        <p className="card-text4" > DevStatus :{props.isDevStatus ?   "Complete" : "Still in Production "}</p>
        <p className='card-text5'>  Progress : {props.Progress}</p>
       
         <button className='View-Page'>
         <li className="card-text">  {props.items}</li>
         </button>
       </div>
   </div>
  )
}

export default Card;
