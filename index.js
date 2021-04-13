// node modules
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: "input",
            name: "name",
            message: "Enter your project title",
            // check if user entered a value
            validate: (value)=>{if(value){return true
            } else {return 'I need a value to continue'}},
           },
           {
            type: "input",
        message: "Enter a description for your project",
        name: "description",
     },
     {
        type: "input",
    message: "How do you install you app?",
    name: "installation",
 },
     {
        type: "input",
    message: "How is your app used?",
    name: "usage",
 },

        {
            type: "input",
        message: "Who contributed to your project?",
        name: "contributors",
     },
     {
        type: "checkbox",
        name: "license",
        message: "Which license(s) do you need?",
        choices: ["Academic Free License v3.0", "Apache 2.0", "Artistic 2.0",  "Educational Community License 2.0", "GNU General Public License Family", "MIT", "Mozilla Public License 2.0", "The Unlicense", "other"," N/A"],   
        },
        {
            type: 'input',
            message: 'What is your Github URL?',
            name: 'github',
      
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
      
          },

    ]
)
.then(({
title,
description,
installation,
usage,
contributors,
license,
github,
email
})=>{
//   create the document template
const template = `# ${title}

*[description](#description)
*[installation](#installation)
*[usage](#usage)
*[contributors](#contributors)
*[license](#license)
##${license}
##${description}
##${usage}
##${installation}
###${contributors}

# Contact Me With Questions:
*Github: ${github}
*Email: ${email}`;
// function to create readme file using fs
createNewfile(title,template);
}
);
function createNewfile(fileName,data){

 fs.writeFile(`./README.md`,data,(err)=>{
if(err){
    console.log(err)
}
console.log("success")
 })  
}