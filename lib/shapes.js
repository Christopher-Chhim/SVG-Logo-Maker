function Shapes() {}

Shapes.prototype.Square = function(side){
    this.side = side;

    this.area = function() {
        return this.side * this.side
    };

    this.perimeter = function() {
        return 4 * this.side
    };
};


Shapes.prototype.Circle = function(radius) {
    this.radius = radius;

    this.area = function() {
        return Math.PI * this.radius * this.radius;
    };

    this.circumference = function() {
        return 2 * Math.PI * this.radius;
    };
};

Shapes.prototype.Triangle = function(base, height) {
    this.base = base;
    this.height = height;

    this.area = function() {
        return 0.5 * this.base * this.height
    };

    this.perimeter = function(side1, side2, side3) {
        return side1 + side2 + side3
    };
};

module.exports = Shapes;