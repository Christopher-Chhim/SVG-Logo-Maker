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

async function run() {
  const shapeOptions = ['Circle', 'Triangle', 'Square'];
  const colorOptions = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      validate: (input) => input.length <= 3 || 'Please enter up to 3 characters.',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Select a color for the text:',
      choices: colorOptions,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapeOptions,
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Select a color for the shape:',
      choices: colorOptions,
    },
  ];

  const answers = await inquirer.prompt(questions);
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
      console.error('Invalid shape selection. Exiting...');
      process.exit(1);
  }

  const shapeInstance = new shapeClass();
  shapeInstance.setColor(shapeColor);

  const textY = shapeName === 'Triangle' ? 150 : 125;

  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="${textY}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

run();