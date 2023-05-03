const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
   {
    type: 'statement',
    message: "Answer the following questions in full sentences in a way that your responses are complete and don't appear to be answers to questions (hit enter when ready)",
    name: "none",

   },
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
  fs.writeFile('./README.md', `#${title}\n`, err =>
  {if (err) {
    console.error(err);
  node}});}
  else if (!title){
    fs.writeFile('./README.md', `#\n`, err =>
  {if (err) {
  console.error(err);
  node}});}
  if (description){
  fs.appendFile('./README.md', `\n## Description\n${description}\n`, err =>
  {if (err) {
  console.error(err);
  node}});} 
  else if (!description){}
  if (installation){
  fs.appendFile('./README.md', `\n## Installation\n${installation}\n`, err =>
  {if (err) {
  console.error(err);
  node}});} 
  else if (!installation){
  }
  if (usage){
  fs.appendFile('./README.md', `\n## Usage\n${usage}\n`, err =>
  {if (err) {
  console.error(err);
  node}});}
  else if (!usage){
  }
  if (collaboration){
  fs.appendFile('./README.md', `\n## Collaboration\n${collaboration}\n`, err =>
  {if (err) {
  console.error(err);
  node}});} 
  else if (!collaboration){
  }
  if (license){
 fs.appendFile('./README.md', `\n## License\n${license}\n`, err =>
 {if (err) {
 console.error(err);
 node}});} 
 else if (!license){
 }
 console.log("Your README.md is ready!")
}