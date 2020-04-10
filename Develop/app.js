var inquirer = require("inquirer");
// var path = require("path");
// var fs = require("fs");
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
​
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

var employees = [];
 ​
// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)

// ​function init() {
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What Is Your Name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID number?"
        },
        {
          type: "input",
          name: "email",
          message: "What Is Your Email Address?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Intern", "Engineer", "Manager"]
        }
        ])
        .then(function(data) {
        if (data.role === "Intern"){
            inquirer.prompt([{
            type: "input",
            name: "school",
            message: "What Is Your School?"
            }])
        .then(function(data2) {
            var intern = new Intern(data.id, data.name, data.email, data2.school);
            employees.push(intern)
        });
        } 
        else if (data.role === "Engineer"){
            inquirer.prompt([{
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?"
            }])
        .then(function(data3) {
            var engineer = new Engineer(data.id, data.name, data.email, data3.gitHub);
            employees.push(engineer)
        });
        } 
        else if (data.role === "Manager"){
            inquirer.prompt([{
            type: "input",
            name: "school",
            message: "What Is Your Office Number?"
            }])
        .then(function(data4) {
            var manager = new Manager(data.id, data.name, data.email, data4.officeNumber);
            employees.push(manager);
        });
        } 
    });
// }

// init();

// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!
// ​
// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.
// ​
// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an 
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work!```


//call HTML render - takes in array
//add an ability to say "that's all the employees I want"
//then call HTML render and send those employees in !