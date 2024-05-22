const generateSVG = require('./svg.js');
const { Triangle, Circle, Square } = require('./shapes.js');

describe('generateSVG', () => {
  test('should generate correct SVG for Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svg = generateSVG('TXT', 'red', triangle);
    expect(svg).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    expect(svg).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">TXT</text>');
  });

  test('should generate correct SVG for Circle', () => {
    const circle = new Circle();
    circle.setColor('green');
    const svg = generateSVG('SVG', 'white', circle);
    expect(svg).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
    expect(svg).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
  });

  test('should generate correct SVG for Square', () => {
    const square = new Square();
    square.setColor('yellow');
    const svg = generateSVG('LOG', 'black', square);
    expect(svg).toContain('<rect x="70" y="30" width="160" height="160" fill="yellow" />');
    expect(svg).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOG</text>');
  });
});
