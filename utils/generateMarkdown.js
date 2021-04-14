// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "N/A") {
    return `![license](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "N/A") {
    return `\n* [License](#license)\n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `## License
    
    This project is licensed under the ${license}`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Table of Contents       
${renderLicenseLink(data.license)}
 * [Description](#description)
 * [Usage](#usage)
 
 * [Test](#test)
 * [Installation](#installation)
 * [Author](#author)
 * [Contributors](#contributors)
 
${renderLicenseSection(data.license)}
 
 ## Description:
 * ${data.description}
 
 ## Usage:
 * ${data.usage}
 
 ## Test:
 
 * Use this command to test:
 * ${data.test}
 
 
 ## Installation:
 * Use this command to install:
 * ${data.installation}
 
 ### Author: ${data.author} 
 
 
 ### Contributors: ${data.contributors}
 
 
 # Contact Me With Questions:
 * Github: ${data.github}
 * Email: ${data.email}`;


}

module.exports = generateMarkdown;
