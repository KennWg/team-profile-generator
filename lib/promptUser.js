const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./lib/promptUser.js')

//Function for getting information about the manager
const promptManager = () => {

    const employeeData = [];

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team manager.',
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log('Please enter name of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID of the team manager.',
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log('Please enter employee ID of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the team manager.',
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log('Please enter email of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the office number of the team manager.',
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log('Please enter office number of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'confirmAddEmployee',
            message: 'Please select below from the below choices if you would like to add an employee:',
            choices: ['Engineer','Intern','None'],
            default: 2

        }
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employeeData.push(manager);
        if(data.confirmAddEmployee === 'None'){
            return employeeData;
        } else {
            return promptEmployee(employeeData);
        }
    })
}

//Final prompt user function
const promptUser = () => {
    promptManager()
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
};

module.exports = promptUser;
