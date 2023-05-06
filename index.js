const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: 'statement',
      message: "Answer the following questions in full sentences (when possible) in a way that your responses are complete and don't appear to be answers to questions (hit enter when ready)",
      name: "none",
     },
     {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
      },{
    type: 'input',
    message: "What is your email address?",
    name: "email",
   },
   {
      type: 'input',
      message: 'What is the title of your project or will be the title of your README?',
      name: 'title',
    },
    {
    type: 'input',
    message: "Briefly write a description of your project so that potential users know what it does",
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
  message: 'Describe ways that viewers can make contributions if any',
  name: 'collaboration',
  },
  {
    type: 'input',
    message: 'Describe the tests if there are any',
    name: 'tests',
    },
  {
  type: 'list',
  message: 'What liscens are you using on the project?',
  name: 'license',
  choices: ["None","Apache 2.0 License","Boost Software License 1.0","BSD 3-Clause License","BSD 2-Clause License","Creative Commons Zero v1 Univeral","GNU Affero General Public License v3.0","GNU General Public License v3.0","GNU General Public License V2.0","GNU Lesser General Public License v2.1","MIT License","Mozilla Public License 2.0","The Unlicense"]
 },
 {
  type: 'input',
  message: 'What should someone do if they have Questions?',
  name: 'questions',
  }
])
      .then((response)=>{
 const {github, email, title, description, installation, usage, collaboration, license, tests, questions} = response;
       console.log(response)
     writeFile(github, email, title, description, installation, usage, collaboration, license, tests, questions)})

function writeFile(github, email, title, description, installation, usage, collaboration, license, tests, questions){
switch (license) {
case 'Apache 2.0 License':
fs.writeFile("./README.md", "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n", err  =>
err ? console.error(err): console.log (""));
break;
case "Boost Software License 1.0":
fs.writeFile("./README.md", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n\n", err  =>
err ? console.error(err): console.log (""));
break;
case "BSD 3-Clause License":
fs.writeFile("./README.md", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n", err  =>
err ? console.error(err): console.log (""));
break;

case "BSD 2-Clause License":
fs.writeFile("./README.md", "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n\n", err  =>
err ? console.error(err): console.log (""));
break;

case "Creative Commons Zero v1 Univeral":
fs.writeFile("./README.md", "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)\n\n", err  =>
err ? console.error(err): console.log (""));
break;

case "GNU Affero General Public License v3.0":
fs.writeFile("./README.md", "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n\n", err  =>
err ? console.error(err): console.log (""));
break;

case "GNU General Public License v3.0":
fs.writeFile("./README.md", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n", err  =>
err ? console.error(err): console.log (""));
break;
  
case "GNU General Public License V2.0":
fs.writeFile("./README.md", "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n\n", err  =>
err ? console.error(err): console.log (""));
break;
case "GNU Lesser General Public License v2.1":
fs.writeFile("./README.md", "[![License](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)\n\n", err  =>
err ? console.error(err): console.log (""));
break;

case "MIT License":
fs.writeFile("./README.md", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n", err  =>
err ? console.error(err): console.log (""));
break;

case "Mozilla Public License 2.0":
fs.writeFile("./README.md", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n\n", err  =>
err ? console.error(err): console.log (""));
break;
case "The Unlicense":
fs.writeFile("./README.md", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n\n", err  =>
err ? console.error(err): console.log (""));
break;
  
default:
fs.writeFile("./README.md", " ", err  =>
err ? console.error(err): console.log (""));
break;
}  
if (title){
fs.appendFile('./README.md', `\n\n# ${title}\n`, err =>
err ? console.error(err): console.log("Title written"));}
else if (!title){
fs.appendFile('./README.md', `\n\n#\n`, err =>
err ? console.error(err): console.log("Missing title not written"));}
if (description){
fs.appendFile('./README.md', `\n## Description\n${description}\n`, err =>
err ? console.error(err): console.log("Description written"));}
else if (!description){}
fs.appendFile('./README.md', `\n\n## Table of Contents\n${installation ?"\n[Installation](#Installation)\n":""}${usage ?"\n[Usage](#Usage)\n":""}${collaboration ?"\n[Contributing](#Contributing)\n":""}${tests ?"\n[Tests](#Tests)\n":""}${license ?"\n[License](#License)\n":""}${questions || github || email ?"\n[Questions](#Questions)\n":""}`, err =>
err ? console.error(err): console.log("Table of Contents Written"));
if (installation){
fs.appendFile('./README.md', `\n## Installation\n${installation}\n`, err =>
err ? console.error(err): console.log("Installation written"));}
else if (!installation){}
if (usage){
fs.appendFile('./README.md', `\n## Usage\n${usage}\n`, err =>
err ? console.error(err): console.log("Usage written"));}
else if (!usage){}
if (collaboration){
fs.appendFile('./README.md', `\n## Contributing\n${collaboration}\n`, err =>
err ? console.error(err): console.log("Collaboration written"));}
else if (!collaboration){}
if (tests){
 fs.appendFile('./README.md', `\n## Tests\n${tests}\n`, err =>
 err ? console.error(err): console.log (""));}
 else if (!license){}
 if (license){
 fs.appendFile('./README.md', `\n## License\nThis project has a/n ${license}\n`, err =>
 err ? console.error(err): console.log("License written"));}
 else if (!license){}
 if (questions || github || email){
 fs.appendFile('./README.md', `\n## Questions\n${questions ?`${questions}`:""}${github ?`This project can be accesed at github.com/${github}.  `:""}${email ?`If you have questions, please email me at ${email}.`:""}`, err =>
 err ? console.error(err): console.log (""));}
 else if (!questions || !github || !email){}
 console.log("Your README.md is ready!")
 }
