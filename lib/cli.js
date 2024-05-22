const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs').promises;
const { Triangle, Circle, Square } = require('./shapes.js');
const generateSVG = require('./svg.js');

class CLI {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = null;
    this.shapeColor = '';
  }

  async run() {
    try {
      await this.promptUser();
      await this.createLogo();
      console.log('Generated logo.svg');
    } catch (err) {
      console.error('Oops. Something went wrong.', err);
    }
  }

  async promptUser() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be 3 characters or less',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal):',
      },
    ]);

    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shapeColor = answers.shapeColor;

    switch (answers.shape) {
      case 'Triangle':
        this.shape = new Triangle();
        break;
      case 'Circle':
        this.shape = new Circle();
        break;
      case 'Square':
        this.shape = new Square();
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    this.shape.setColor(this.shapeColor);
  }

  async createLogo() {
    const svgContent = generateSVG(this.text, this.textColor, this.shape);
    const filePath = join(process.cwd(), 'examples', 'logo.svg');
    await writeFile(filePath, svgContent);
  }
}

module.exports = CLI;
