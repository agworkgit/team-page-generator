const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class. HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Set the github property
        this.github = github;
    }

    // Define the getGithub method
    getGithub() {
        return this.github;
    }

    // Override the getRole method to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;