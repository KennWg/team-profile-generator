const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./lib/promptUser.js')

const employeeData = [];

const promptUser = () => {
    promptManager()
        .then(promptEmployee)
        .then(employeeData => {
            return generatePage(employeeData)
        })
        .then(pageHTML => {
            return writeFile(pageHTML)
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = promptUser;
