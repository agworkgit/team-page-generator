// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Set the github property
        this.officeNumber = officeNumber;
    }

    // Define the getGithub method
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the getRole method to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

// officeNumber
// getRole()—overridden to return 'Manager'