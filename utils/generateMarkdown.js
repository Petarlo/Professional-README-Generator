// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
  This project is covered under the ${license} license.
  To learn more about what this means, click the license button at the top.`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#how-to-contribute)
  * [Tests](#tests)
  * [Questions/Contact Info](#questionscontacts)
  * [Credits](#credits)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## How to contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions/Contacts
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
  ${data.credit}
`;
}

module.exports = generateMarkdown;
