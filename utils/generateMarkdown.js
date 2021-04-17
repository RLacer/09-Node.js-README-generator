// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  license = license[0].split(' ').join('%20');
  if (license !== "N/A") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

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
 * [Contact Me](#contact)
 * [Link](#link)
 
${renderLicenseSection(data.license)}
 
 ## Description:
 * ${data.description}
 
 ## Usage:
 * ${data.usage}
 
 ## Test:
  * ${data.test}
 
 
 ## Installation:
 * ${data.installation}
 
 ### Author:
  ${data.author} 
 
 
 ### Contributors:
  ${data.contributors}
 
 
 ### Contact Me With Questions or for More Info:
 
* Github: ${data.github}
* Email: ${data.email}

### Link
${data.link}`




}

module.exports = generateMarkdown;
