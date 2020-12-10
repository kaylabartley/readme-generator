const generateBadges = (licenseName, arr) => {
    [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4]=arr;
    switch(licenseName){
        case a:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case b:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case c:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case d:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case e: 
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case f: 
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case g: 
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case h:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case i:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case j:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case k:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case l:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case m:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case n:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case o:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case p:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case q:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case r:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case s:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case t:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case u:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case v:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case w:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case x:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case y:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case z:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case a1:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case a2:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case a3:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case a4:
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        default:
            return `Error has occured`;
            break;
    }
}
const generateContributing = (conf, contributing) => {
    if (conf===true){
        return `## Contributing
${contributing}`;
    }else {
         return false;
    }

}
const generateTesting = (conf, testing) => {
    if (conf===true){
        return `## Testing
${testing}`;
    }else {
         return false;
    }
}
const generateEmail = (conf, emailAddress) => {
    if (conf===true){
        return `${emailAddress}`;
    }else {
         return false;
    }
}
const generateContributingIndex = conf => {
    if (conf===true){
        return `* [Contributing](#contributing)`;
    }else {
         return false;
    }
}
const generateTestingIndex = conf => {
    if (conf===true){
        return `* [Testing](#testing)`;
    }else {
         return false;
    }
}
const generateLicense = license => {
    if(license.length > 1){
        return `${license.join(', ')}`;
    }
    else {
        return `${license}`;
    }
}

module.exports = (templateData, licenseArr) => {
    console.log(templateData);
   const {title, description, installation, usage, confirmContributing, contributing, confirmTesting, testing, license, confirmEmail, emailAddress, username } = templateData;

    return `
# ${title}

${generateBadges(license, licenseArr)}

## Description 

${description}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
${generateContributingIndex(confirmContributing)}
${generateTestingIndex(confirmTesting)}
* [Questions](#questions)


## Installation

${installation}


## Usage 

${usage}


## Licenses

${generateLicense(license)}


${generateContributing(confirmContributing, contributing)}


${generateTesting(confirmTesting, testing)}


## Questions

${username}

${generateEmail(confirmEmail, emailAddress)}

    `
}