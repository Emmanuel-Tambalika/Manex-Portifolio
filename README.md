// Using VITE  For the front end Application. 'Dont create a frontEnd folder just yet '
npm create vite@latest 
select react
select javascript 
cd frontend 
type in  ->   npm i

//Add More Packages .
npm i react-router-dom axios react-cookie

For the BackEnd Application.
npm init -y
type-> clear in command Line .  
inside json file insert: "type":"module" below desctption.

// next install express and nodemon .
npm i express nodemon bcryptjs cors jsonwebtoken mongoose

type-> clear in command Line  on success .
inside json file  under Script remove the following:
 "test": "echo \"Error: no test specified\" && exit 1"
 and insert the following .
  "start":"node index.js",
   "dev":"nodemon index.js"
