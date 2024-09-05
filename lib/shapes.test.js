import { Circle } from './shapes';
import { Square } from './shapes';
import { Triangle } from './shapes';



describe('Circle', () => {
  it('should render a circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
    it('should render a square with the correct color', () => {
      const square = new Square();
      square.setColor('blue');
      expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
    });
  });

describe('Triangle', () => {
    it('should render a triangle with the correct color', () => {
      const triangle = new Triangle();
      triangle.setColor('black');
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="black" />');
    });
  });