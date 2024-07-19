const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('triangle',() => {
        it('should return a triangle if it has 3 sides', () => {
            const sides = 3;
            const shapes = new Shapes();
            expect(shapes).toEqual(sides);
        });
    });
    
    describe('square',() => {
        it('should return a square if it has 4 sides', () => {
            const sides = 4;
            const shapes = new Shapes();
            expect(shapes).toEqual(sides);
        });
    });

    describe('circle',() => {
        it('should return a circle if it has 0 sides', () => {
            const sides = 0;
            const shapes = new Shapes();
            expect(shapes).toEqual(sides);
        });
    });
    


});


