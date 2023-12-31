// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license != "None") {
    badge = `![License Badge](https://img.shields.io/badge/${license}-blue)`
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""

  switch(license) {
    case "MIT":
      licenseLink = "https://opensource.org/license/mit/";
      break;
    case "GNU":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
      break;
    case "BSD":
      licenseLink = "https://opensource.org/license/bsd-3-clause/"
      break;
    default:
      licenseLink = "";
      break
  }

  return licenseLink

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "## License \n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information about this license\n";
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"];

  let markdown = renderLicenseBadge(data.license) +"\n";
  
  markdown +=
  `## Title
  ${data.title}
  
  ## Table of Contents \n`
  for (let i = 0; i<sections.length; i++) {
    if(! (sections[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n"
  }
}

  markdown +=
  `## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage} \n`
  
  markdown += renderLicenseSection(data.license) + "\n"
  markdown += renderLicenseLink(data.license) + "\n"

  markdown +=
  `## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}

  ## Questions
  Please visit https://github.com/${data.GitHub} for more information on this project and others written by this author.\n
  If there are any additional quesitons regarding this project, please email ${data.email} and the author will get back to you as soon as they can.\n
  The author of this project is ${data.author}.`


  return markdown;
}



module.exports = generateMarkdown;
