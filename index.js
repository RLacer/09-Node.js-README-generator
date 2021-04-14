// // node modules
// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
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
            choices: ["Academic Free License v3.0", "Apache 2.0", "Artistic 2.0", "Educational Community License 2.0", "GNU General Public License Family", "MIT", "Mozilla Public License 2.0", "The Unlicense", "other", " N/A"],
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
        test,
        installation,
        usage,
        author,
        contributors,
        license,
        github,
        email
    }) => {
        //   create the document template
        const template = `# ${title}

 # Table of Contents       
 * [License](#license)
* [Description](#description)
* [Usage](#usage)

* [Test](#test)
* [Installation](#installation)
* [Author](#author)
* [Contributors](#contributors)

### License:
* ${license}

## Description:
* ${description}

## Usage:
* ${usage}

## Test:

* Use this command to test:
* ${test}


## Installation:
* Use this command to install:
* ${installation}

### Author: ${author} 


### Contributors: ${contributors}


# Contact Me With Questions:
* Github: ${github}
* Email: ${email}`;
        // function to create readme file using fs
        createNewfile(title, template);
    }
    );
function createNewfile(fileName, data) {

    fs.writeFile(`./README.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("success")
    })
}