import React from 'react'

 const IntroductionCard = (props) => {
  return (
    <div className='main-div1'>
       <div  className='card2'>
        
        <p className="card-text3"> {props.description}</p>
         <label >{props.ThankYou}</label>
           
       </div>
        
    </div>
  )
}  
export default IntroductionCard;