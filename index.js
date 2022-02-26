const promptUser = require('./lib/promptUser.js');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./lib/generateSite.js');

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