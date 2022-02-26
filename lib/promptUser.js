const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./lib/promptUser.js')
const Manager = require('./Manager.js');
const Engineer = require('./Engineer/.js');
const Intern = require('./Intern.js');

//Function for getting information about the manager
const promptUser = () => {

    const employeeData = [];

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team manager.',
            validate: input => {
                if (input) {
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
                if (input) {
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
                if (input) {
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
                if (input) {
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
            choices: ['Engineer', 'Intern', 'None'],
            default: 2

        }
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employeeData.push(manager);
        if (data.confirmAddEmployee === 'None') {
            return employeeData;
        } else if (data.confirmAddEmployee === 'Engineer') {
            return promptEngineer(employeeData);
        } else {
            return promptIntern(employeeData);
        }
    })
};

//Function for getting information about engineers
const promptEngineer = employeeData => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the engineer.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter name of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID of the engineer.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter employee ID of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the engineer.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter email of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the GitHub username of the engineer.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter GitHub username of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'confirmAddEmployee',
            message: 'Please select below from the below choices if you would like to add an employee:',
            choices: ['Engineer', 'Intern', 'None'],
            default: 2

        }
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeData.push(engineer);
        if (data.confirmAddEmployee === 'None') {
            return employeeData;
        } else if (data.confirmAddEmployee === 'Engineer') {
            return promptEngineer(employeeData);
        } else {
            return promptIntern(employeeData);
        }
    });
};

//Function for getting information about interns
const promptIntern = employeeData => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the intern.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter name of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID of the intern.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter employee ID of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the intern.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter email of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school of the intern.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter school of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'confirmAddEmployee',
            message: 'Please select below from the below choices if you would like to add an employee:',
            choices: ['Engineer', 'Intern', 'None'],
            default: 2

        }
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.github);
        employeeData.push(intern);
        if (data.confirmAddEmployee === 'None') {
            return employeeData;
        } else if (data.confirmAddEmployee === 'Engineer') {
            return promptEngineer(employeeData);
        } else {
            return promptIntern(employeeData);
        }
    });
};

module.exports = promptUser;
