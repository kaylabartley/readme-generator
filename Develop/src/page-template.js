const generateBadges = (licenseName, arr) => {
    const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4]=arr;
    badgeArray = [];
    licenseName.forEach(index=>{
        switch(index){
            case a:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case b:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case c:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case d:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case e: 
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case f: 
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case g: 
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case h:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case i:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case j:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case k:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case l:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case m:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case n:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case o:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case p:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case q:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case r:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case s:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case t:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case u:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case v:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case w:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case x:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case y:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case z:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case a1:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case a2:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case a3:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case a4:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            default:
                return `Error has occured`;
        }
    })
    if(badgeArray > 1){
        return `${badgeArray.join(' ')}`;
    }else {
        return `${badgeArray}`;
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