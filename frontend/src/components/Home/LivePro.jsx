import React  from 'react';
import Card from '../../Card';
import SkillsSet from '../../SkillsSet';
   
export const LivePro = () => {

  return (
    <div>
       <Card ProjectNumber="Project  1"
        name="LessonHunt"
         description ="a unique platform where every life experience becomes a valuable lesson. Share your stories anonymously or openly, and inspire a global community eager to learn and grow together.Connect, reflect, and empower others through the wisdom you’ve gained on your journey."  
       isDevStatus={false}  
       Progress="80%"
       items={<a href= "https://lessonhunt.netlify.app">Visit Site</a> }
       />   
    </div>
  )
}
export default LivePro ;