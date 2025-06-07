import React  from 'react';
import Card from '../../Card';
import SkillsSet from '../../SkillsSet';
   
export const LivePro = () => {

  return (
    <div>
    
       <Card ProjectNumber="Project  1"
        name="OdioGram"
         description ="Short form audio media platform.Support audio as the main medium of communication. 
         Audio is powerful yet not fully utilized and optimized .High quality content can be created in a short space of time with less logistics involved ."  
       isDevStatus={false} 
       Progress="<10%"
       items={<a href="">Live Soon</a> }
       /> 
         
    </div>

  )
}
export default LivePro ;