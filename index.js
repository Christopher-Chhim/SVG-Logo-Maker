const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// WHEN I am prompted for text
async function run() {
  const shapeOptions = ['Triangle', 'Square', 'Circle'];
  const colorOptions = ['red', 'blue', 'pink', 'brown', 'white', 'orange', 'black'];

  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      // THEN I can enter up to three characters
      validate: (input) => input.length <= 3 || 'Please enter up to 3 characters.',
    },
    {
      type: 'list',
      name: 'textColor',
      // WHEN I am prompted for the text color
      message: 'Select a color for the text:',
      // THEN I can enter a color keyword (OR a hexadecimal number)
      choices: colorOptions,
    },
    {
      type: 'list',
      name: 'shape',
      // WHEN I am prompted for a shape
      message: 'Select a shape:',
      // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
      choices: shapeOptions,
    },
    {
      type: 'list',
      name: 'shapeColor',
      // WHEN I am prompted for the shape's color
      message: 'Select a color for the shape:',
      // THEN I can enter a color keyword (OR a hexadecimal number)
      choices: colorOptions,
    },
  ];

  const answers = await inquirer.prompt(questions);
  // WHEN I have entered input for all the prompts
  const { text, textColor, shape: shapeName, shapeColor } = answers;

  let shapeClass;
  switch (shapeName) {
    case 'Circle':
      shapeClass = Circle;
      break;
    case 'Triangle':
      shapeClass = Triangle;
      break;
    case 'Square':
      shapeClass = Square;
      break;
    default:
      console.error('Unacceptable shape choice. Aborting code...');
      process.exit(1);
  }

  const shapeInstance = new shapeClass();
  shapeInstance.setColor(shapeColor);

  const textY = shapeName === 'Triangle' ? 150 : 125;

  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="${textY}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  // THEN an SVG file is created named `logo.svg`
  fs.writeFileSync('logo.svg', svg);
  // AND the output text "Generated logo.svg" is printed in the command line
  console.log('Generated logo.svg');
}

run();