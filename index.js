

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [

    {
        type: "input",
        message: "Enter your project title",
        name: "title",
        // check if user entered a value
        validate: (value) => {
            if (value) {
                return true
            } else { return 'Enter a value or N/A' }
        },
    },
    {
        type: "input",
        message: "Enter a description for your project",
        name: "description",
    },
    {
        type: "input",
        message: "How do you test your app?",
        name: "test",
    },
    {
        type: "input",
        message: "How do you install your app?",
        name: "installation",
    },

    {
        type: "input",
        message: "How is your app used?",
        name: "usage",
    },
    {
        type: "input",
        message: "Who wrote this project?",
        name: "author",
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
        choices: [  "Academic Free License v3.0",  "Apache 2.0", "Artistic 2.0", "Educational Community License 2.0", "GNU General Public License Family", "MIT", "Mozilla Public License 2.0", "The Unlicense",  "N/A"],      
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
    {
        type: 'input',
        message: 'Enter a relevant link and description for that link',
        name: 'link',

    },

]

  
function createNewfile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}



function init() {
    inquirer.prompt(questions).then(responses => {
        console.log("generating readme...")
        createNewfile("README.md", generateMarkdown({ ...responses }));
    })
}

init()