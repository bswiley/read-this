const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project or will be the title of your README?',
      name: 'title',
    },
    {
    type: 'input',
    message: "Briefly write a description of yoru project so that potential users know what it does",
    name: 'description',
    },
   {
   type: 'input',
   message: 'Tell the user what is needed to install the project',
   name: 'installation',
   },
   {
   type: 'input',
   message: 'How should your project be used?',
   name: 'usage',
  },
  {
  type: 'input',
  message: 'List your collaboratores if there are any',
  name: 'collaboration',
  },
  {
            type: 'input',
            message: 'What liscens are you using on the project?',
            name: 'license',
          }])
      .then((response)=>
{const{title, description, installation, usage, collaboration, license} = response;
       console.log(response)
      writeFile(title, description, installation, usage, collaboration, license)})

function writeFile(title, description, installation, usage, collaboration, license){
  if (title){
  fs.writeFile('./README.md', `#${title}\n\n`, err =>
  {if (err) {
    console.error(err);
  node}});}
  else if (!title){
  fs.writeFile('./README.md', `#\n\n`, err =>
  {if (err) {
  console.error(err);
  node}});}
  if (description){
  fs.appendFile('./README.md', `## Description\n${description}\n`, err =>
  {if (err) {
  console.error(err);
  node}});} 
  else if (!description){}
  if (installation){
  fs.appendFile('./README.md', `## Installation\n${description}\n`, err =>
    {if (err) {
    console.error(err);
    node}});} 
  }
  
  // \n\n##Description\n\n${motivation}\n${why}\n${solution}\n${learn}\n${challenges}\n${future}\n${description}\n\n##Installation\n\n${instalation}\n\n##Usage\n\n${usage}`, err =>
//             // {if (err) {
//               console.error(err);
//             node}});
//             // file written successfully
// }
  