// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Set the github property
        this.school = school;
    }

    // Define the getGithub method
    getSchool() {
        return this.school;
    }

    // Override the getRole method to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;

// school
// getSchool()
// getRole()—overridden to return 'Intern'