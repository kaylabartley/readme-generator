
/*Acceptance Criteria
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
    'Apache 2.0 License',
    'Boost Software License 1.0',
    'BSD 3-Clause License',
    'BSD 2-Clause License',
    'CC0',
    'Attribution 4.0 International',
    'Attribution-ShareAlike 4.0 International',
    'Attribution-NonCommercial 4.0 International',
    'Attribution-NoDerivates 4.0 International',
    'Attribution-NonCommmercial-ShareAlike 4.0 International',
    'Attribution-NonCommercial-NoDerivatives 4.0 International',
    'Eclipse Public License 1.0',
    'GNU GPL v3',
    'GNU GPL v2',
    'GNU AGPL v3',
    'GNU LGPL v3',
    'GNU FDL v1.3',
    'IBM Public License Version 1.0',
    'ISC License (ISC)',
    'The MIT License',
    'Mozilla Public License 2.0',
    'Attribution License (BY)',
    'Open Database License (ODbL)',
    'Public Domain Dedication and License (PDDL)',
    'The Perl License',
    'The Artistic License 2.0',
    'SIL Open Font License 1.1',
    'The Unlicense',
    'WTFPL',
    'The zlib/libpng License'
];
// array of questions for user
//title, description, installation, usage, contributing, testing, license, username, emailAddress
const questions = [
    'Enter the title of your README: ',
    'Write a description for your README:',
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    'Provide instructions and examples for use of your project: ',
    'Add contributor information: ',
    'Enter testing information: ',
    'Choose a license for your project (Check all that apply): ',
    'Enter your GitHub username: ',
    'Enter your email address: '
];

// function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
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
    const [title, description, installation, usage, contributing, testing, license, username, emailAddress] = questions;
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
            type: 'confirm',
            name: 'confirmEmail',
            message: 'Would you like to enter your email address for contact?',
            default: true
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: emailAddress,
            when: ({ confirmEmail }) => {
              if (confirmEmail) {
                return true;
              } else {
                return false;
              }
            }
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
        }
    ]);
}

// function to initialize program
const init = () => {
    promptUser()
      .then(data => {
        return generateReadme(data, licenseArray);
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
