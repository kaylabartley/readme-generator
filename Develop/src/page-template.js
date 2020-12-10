const generateBadges = (licenseName, arr) => {
    const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4]=arr;
    badgeArray = [];
    licenseName.forEach(index=>{
        switch(index){
            case a:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case b:
                badgeArray.push('[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)');
                break;
            case c:
                badgeArray.push('[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)');
                break;
            case d:
                badgeArray.push('[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)');
                break;
            case e: 
                badgeArray.push('[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)');
                break;
            case f: 
                badgeArray.push('[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)');
                break;
            case g: 
                badgeArray.push('[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)');
                break;
            case h:
                badgeArray.push('[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)');
                break;
            case i:
                badgeArray.push('[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)');
                break;
            case j:
                badgeArray.push('[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)');
                break;
            case k:
                badgeArray.push('[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)');
                break;
            case l:
                badgeArray.push('[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)');
                break;
            case m:
                badgeArray.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
                break;
            case n:
                badgeArray.push('[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)');
                break;
            case o:
                badgeArray.push('[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)');
                break;
            case p:
                badgeArray.push('[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)');
                break;
            case q:
                badgeArray.push('[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)');
                break;
            case r:
                badgeArray.push('[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)');
                break;
            case s:
                badgeArray.push('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
                break;
            case t:
                badgeArray.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
                break;
            case u:
                badgeArray.push('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
                break;
            case v:
                badgeArray.push('[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)');
                break;
            case w:
                badgeArray.push('[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)');
                break;
            case x:
                badgeArray.push('[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)');
                break;
            case y:
                badgeArray.push('[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)');
                break;
            case z:
                badgeArray.push('[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)');
                break;
            case a1:
                badgeArray.push('[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)');
                break;
            case a2:
                badgeArray.push('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)');
                break;
            case a3:
                badgeArray.push('[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)');
                break;
            case a4:
                badgeArray.push('[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)');
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
         return ``;
    }

}
const generateTesting = (conf, testing) => {
    if (conf===true){
        return `## Testing
        
${testing}`;
    }else {
         return ``;
    }
}
const generateEmail = (conf, emailAddress) => {
    if (conf===true){
        return `${emailAddress}`;
    }else {
         return ``;
    }
}
const generateContributingIndex = conf => {
    if (conf===true){
        return `* [Contributing](#contributing)`;
    }else {
         return ``;
    }
}
const generateTestingIndex = conf => {
    if (conf===true){
        return `* [Testing](#testing)`;
    }else {
         return ``;
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