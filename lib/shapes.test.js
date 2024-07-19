const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('triangle',() => {
        it('should multiply the base by the height mutliplied by 0.5', () => {
            const base = 3;
            const height = 6;
            const area = 9;
            const shapes = new Shapes();

            expect(shapes.Triangle(base, height)).toEqual(area);
        });

        it('should add all 3 sides', () => {
            const side1 = 1;
            const side2 = 2;
            const side3 = 3;
            const perimeter = 6;
            const shapes = new Shapes();

            expect(shapes.Triangle(side1, side2, side3)).toEqual(perimeter);
        });
    });
    
    describe('square',() => {
        it('should multiply all 4 sides', () => {
            const sides = 4;
            const area = 16;
            const shapes = new Shapes();

            expect(shapes.Square(sides)).toEqual(area);
        });
        it('should add all 4 sides', () => {
            const sides = 8;
            const perimeter = 32;
            const shapes = new Shapes();

            expect(shapes.Square(sides)).toEqual(perimeter);
        });
    });

    describe('circle',() => {
        it('should mutiply pi by 2 multiplied by the radius', () => {
            const radius = 5;
            const circumference = 31.41592654;
            const shapes = new Shapes();

            expect(shapes.Circle(radius)).toEqual(circumference);
        });
        it('should mutiply pi by double the radius', () => {
            const radius = 5;
            const area = 78.53981634;
            const shapes = new Shapes();

            expect(shapes.Circle(radius)).toEqual(area);
        });
    });
    


});


