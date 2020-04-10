var inquirer = require("inquirer");
var path = require("path");
var fs = require("fs");

var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");

var render = require("./lib/htmlRenderer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

var employees = [];

function goStart() {

    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Intern", "Engineer", "Manager", "Office is Full"]
        }])
        .then(function(response) {
            if (response.role === "Office is Full") {
                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdirSync(OUTPUT_DIR);
                    console.log('The path do not exists.');
                  }
                fs.writeFileSync(outputPath, render(employees));
                process.exit()}
            else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
            
                        message: "What is Your Name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is Your ID Number?"
                    },
                    {
                      type: "input",
                      name: "email",
                      message: "What Is Your Email Address?"
                    }        
                ])
                .then(function(data) {
                if (response.role === "Intern"){
                    inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What Is Your School?"
                    }])
                .then(function(data2) {
                    var intern = new Intern(data.id, data.name, data.email, data2.school);
                    employees.push(intern)
                    goStart();
                });
                } 
                else if (response.role === "Engineer"){
                    inquirer.prompt([{
                    type: "input",
                    name: "gitHub",
                    message: "What is your GitHub username?"
                    }])
                .then(function(data3) {
                    var engineer = new Engineer(data.id, data.name, data.email, data3.gitHub);
                    employees.push(engineer)
                    goStart();
                });
                } 
                else if (response.role === "Manager"){
                    inquirer.prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "What Is Your Office Number?"
                    }])
                .then(function(data4) {
                    var manager = new Manager(data.id, data.name, data.email, data4.officeNumber);
                    employees.push(manager);
                    goStart();
                });
                } 
            })

        }        
    });
}

goStart()