const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the team manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the team manager's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the team manager's email address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the team manager's office number:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's GitHub username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email address:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school:",
  },
];

function addManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
  }
  
  function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
  }
  
  function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
  }
  
  function promptMenu() {
    inquirer
      .prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Finish building the team"],
      })
      .then((answer) => {
        switch (answer.choice) {
          case "Add Engineer":
            addEngineer();
            break;
          case "Add Intern":
            addIntern();
            break;
          case "Finish building the team":
            generateHTML();
            break;
        }
      });
  }
  
  function generateHTML() {
    const htmlContent = render(teamMembers);
  
    // Check if the "output" directory exists, and create it if not
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
  
    // Write the HTML content to the "team.html" file
    fs.writeFileSync(outputPath, htmlContent);
  
    console.log(`Team HTML generated at ${outputPath}`);
  }
  
  // Start the application by adding the manager
  addManager();
