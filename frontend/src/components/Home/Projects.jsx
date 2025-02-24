import React  from 'react';
import Card from '../../Card';
import SkillsSet from '../../SkillsSet';


    
export const Projects = () => {

  return (
    <div>
   
   <Card ProjectNumber="Project  1" 
       name="CoreStatus" 
       description=" Through anonymous interaction , we help organizations gather Invaluable and Raw Information from 
       employees and patners that is normally difficult to share due to fear of Social Penalty  . " T
        isDevStatus={false}
        Progress="40%"  
        items={<a href=""> Live Sooner </a> }
        />
        
        <Card ProjectNumber="Project 2 " 
        name="InternUp" 
        description=" Helps organization manage their Internship Placements . Instead of just 
        responding to Students that reach out to them they can prospect students of choice using
         effective tools. Students easily connect with many potential intership  opportunities and
           seamlessly manage the process. " 
        isDevStatus={false} 
        Progress="35%"
        items={<a href="">Live Soon</a> }
        /> 

        
       <Card ProjectNumber="Project  3"
        name="OdioGram"
         description ="Short form audio media platform.Support audio as the main medium of communication. 
         Audio is powerful yet not fully utilized and optimized .High quality content can be created in a short space of time with less logistics involved ."  
       isDevStatus={false} 
       Progress="<10%"
       items={<a href="">Live Soon</a> }
       /> 
         
        <Card ProjectNumber="Project  4" 
       name="YouthFul" 
       description=" A social media platform connecting Youth around the globe. Allowing them to network and support each other in their early
        journery's. More  Youth can win  if the ecosystem is healthy and supportive . " 
        isDevStatus={false}
        Progress="<10%" 
        items={<a href="">Live Soon</a> }

        /> <Card


        ProjectNumber="Project   5"
        name="Writeful" 
        description=" Digitally connects Writers and Readers. 
        Writers publish online exploring new, untapped markets receiving recurring revenue as Readers
       now access the books through subscription. Readers will interact with
        unlimited number of books using just the fraction of the money . "  
        isDevStatus={false} 
        Progress= "<10%"
        items={<a href="">Live Soon </a> }
      
        /> 

<Card ProjectNumber="Project  6" 
       name="HotTopic" 
       description="  Allow Anonymous users online share sensitive topics happening in 
       their life to other anonymous  users.Those seeking help will benefit from the feedback shared by other  users available on the platform  " 
        isDevStatus={false}
        Progress="<10%"
        items={<a href=""> Live Soon </a> }
        /> 
          <SkillsSet 
            heading="Contact and Ref. "
            items={<a href="">GitHub</a> }
            items0={<a href="">X</a>}
              items1="ManexTyc@gmail.com"
              items2="m2384b@students.msuas.ac.zw"
              items3="+263733319807"
              items4="+263718247858"
           
           
      />
    </div>



  )
}
export default Projects ;