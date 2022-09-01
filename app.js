const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./markdown');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'What is your project about? Describe it?',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'Table of Contents'
    },
    {
        type: 'input',
        message: 'What dependecies does the user need to install to run your app?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'How does the user use this app? Show the instructions?',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Which licence does this app use?',
        name: 'Licence',
        choices: ['MIT', 'ISC', 'MPL', 'GPL', 'AGPL'],
        default: 'MIT'
    },
    {
        type: 'input',
        message: 'Name the contributor(s) of this app.',
        name: 'Contributors'
    },
    {
        type: 'input',
        message: 'How does the user test this app?',
        name: 'Test'
    },
    {
        type: 'input',
        message: 'Type your GitHub username.',
        name: 'Username'
    },
    {
        type: 'input',
        message: 'Type your email address.',
        name: 'Email'
    }
])
    .then((answers) => {
        const fileName = answers.Title
        const readmeFileFullName = `README-${fileName}.md`
        fs.writeFile(readmeFileFullName, generateMarkdown(answers), (err) =>
            err
                ? console.log(err)
                : console.log(`Your ${fileName} has been generated at ${readmeFileFullName}!`)
        );
    })