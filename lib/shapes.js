class Shape {
    constructor() {}
  
    render() {
      return '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}"></circle>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18,244,182,56,182" fill="${this.color}"></polygon>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"></rect>`;
    }
  }
  
  module.exports.Circle = Circle;
  module.exports.Triangle = Triangle;
  module.exports.Square = Square;
 
  // Incorrect

// Shapes.prototype.Square = function(side){
//     this.side = side;

//     this.area = function() {
//         return this.side * this.side
//     };

//     this.perimeter = function() {
//         return 4 * this.side
//     };
// };


// Shapes.prototype.Circle = function(radius) {
//     this.radius = radius;

//     this.area = function() {
//         return Math.PI * this.radius * this.radius;
//     };

//     this.circumference = function() {
//         return 2 * Math.PI * this.radius;
//     };
// };

// Shapes.prototype.Triangle = function(base, height) {
//     this.base = base;
//     this.height = height;

//     this.area = function() {
//         return 0.5 * this.base * this.height
//     };

//     this.perimeter = function(side1, side2, side3) {
//         return side1 + side2 + side3
//     };
// };

// module.exports = Shapes;