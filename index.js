const inquirer = require('inquirer');
const shapes = require('shapes');
const fs = require('fs');

const questions = [{
    type: 'input',
    message: 'What would you like your logo to say?',
    name: 'logo',
    validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.'
  },
  {
    type: 'input',
    message: 'What color would you like your text to be?',
    name: 'textColor',
  },
  {
    type: 'input',
    message: 'What shape would you like to use for your logo?',
    name: 'shape',
    choices: ["triangle", "square", "circle"]
    
  },
  {
    type: 'input',
    message: 'What color would you like your shape to be?',
    name: 'shapeColor',
  },
];


function Shapes(edges){
    this.edges = edges;
}





function writeToFile(data) {
    fs.writeFile("./examples/Sample.svg", data, (err) => {
        err ? console.log(err) : console.log('Successfully created svg file!')
    });
  }



function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log("Generating svg logo...")
      const svg = generateMarkdown(data)
      writeToFile(svg);
    })
}

init();