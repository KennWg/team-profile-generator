const fs = require('fs');
const promptUser = require('./lib/promptUser');

promptUser()
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