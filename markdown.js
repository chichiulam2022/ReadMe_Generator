function generateMarkdown(answers) {
    return ` 
# ${answers.Title}
https://github.com/${answers.Username}/${answers.Title}

## Description
${answers.Description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation
The following necessary dependencies must be installed properly: 
* <b>${answers.Installation}</b>.

## Usage
In order to use this app, ${answers.Usage}

## Licence
This project is licensed under the ${answers.Licence} licence. 
* ![GitHub license](https://img.shields.io/badge/license-MIT-blueviolet.svg)

## Contributors
​Contributors: <b>${answers.Contributors}</b>

## Tests
${answers.Test}

## Questions
If you have any questions about the repo, feel free to find me on my GitHub account <b><i>${answers.Username}</b></i> or email me at ${answers.Email}.
`
}

module.exports = generateMarkdown;