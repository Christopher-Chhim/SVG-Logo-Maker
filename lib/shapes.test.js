import { Circle } from './shapes';

describe('Circle', () => {
  it('should render a circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});