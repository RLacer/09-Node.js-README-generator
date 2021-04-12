// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your project title",   
       },
   
    {
     type: "input",
     name: "name",
     message: "Who is the author of this project?",   
    },
    {
    type: "checkbox",
    name: "language",
    message: "What technologies were used?",
    choices: ["html", "javascript", "css",  "nodejs"],   
    },
    {
        type: "checkbox",
        name: "licenses",
        message: "Which licenses would you like to use?",
        choices: ["Academic Free License v3.0", "Apache 2.0", "Artistic 2.0",  "Educational Community License 2.0", "GNU General Public License Family", "MIT", "Mozilla Public License 2.0", "The Unlicense", ],   
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed?",
              
            },

    {
type: "input",
name: "communication",
message: "What the code to  run a test?",
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'Github',
  
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
  
      },
]

function init() {
inquirer.prompt(questions)
.then(function (inquirerResponse) {
    console.log(inquirerResponse)
    const filename = `${inquirerResponse.name.toLowerCase().split(" ").join("")}Readmd.md`
    fs.writeFile(filename, JSON.stringify(inquirerResponse, null, "\t"), function(err) {
        err ? console.log(err) : console.log("success");
    })
})

}

init()