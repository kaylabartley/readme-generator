
/*Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project !title!
THEN this is displayed as the title of the README
WHEN I enter a !description!, !installation instructions!, !usage information!, !contribution guidelines!, and !test instructions!
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a !license!  for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my !GitHub username!
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my !email address!
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/page-template');
const licenseArray = [

];
// array of questions for user
const questions = [

];

// function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

const promptUser = () => {
    const {title, description, installation, usage, contributing, testing, license, username, emailAddress} = questions;
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: title,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter a title!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: description,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter a description!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: installation,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter a instructions for installation');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: usage,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter a instructions for usage');
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to enter information about contributors to your project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: contributing,
            when: ({ confirmContributing }) => {
              if (confirmContributing) {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTesting',
            message: 'Would you like to write tests for your application and provide examples on how to run them?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: testing,
            when: ({ confirmTesting }) => {
              if (confirmTesting) {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: license,
            choices: licenseArray
        },
        {
            type: 'input',
            name: 'username',
            message: username,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('Please enter your GitHub username!');
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmail',
            message: 'Would you like to enter your email address for contact?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: emailAddress,
            when: ({ confirmEmail }) => {
              if (confirmEmail) {
                return true;
              } else {
                return false;
              }
            }
        }

    ]);
}

// function to initialize program
const init = () => {
    promptUser()
      .then(data => {
        return generatePage(data);
      })
      .then(markUp => {
        return writeToFile(markUp);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
}

// function call to initialize program
init();
