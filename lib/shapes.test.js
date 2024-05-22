const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle should render correctly', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });

  test('Square should render correctly', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.render()).toEqual('<rect x="70" y="30" width="160" height="160" fill="yellow" />');
  });
});
