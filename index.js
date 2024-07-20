const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const fs = require('fs');


const shapes = {
  Circle: (color) => `<circle cx="25" cy="75" r="20" fill="${color}" />`,
  Triangle: (color) => `<polygon points="150,50 200,150 100,150" fill="${color}" />`,
  Square: (color) => `<rect x="100" y="50" width="100" height="100" fill="${color}" />`
};

const generateSVG = (text, textColor, shape, shapeColor) => `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${shapes[shape](shapeColor)}
  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

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
    type: 'list',
    message: 'What shape would you like to use for your logo?',
    name: 'shape',
    choices: ["Triangle", "Square", "Circle"]
    
  },
  {
    type: 'input',
    message: 'What color would you like your shape to be?',
    name: 'shapeColor',
  },
];  



function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { logo, textColor, shape, shapeColor } = answers;
      const svgContent = generateSVG(logo, textColor, shape, shapeColor);
    
      fs.writeFile('./examples/logo.svg', svgContent, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('Successfully created logo.svg file!');
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


init();