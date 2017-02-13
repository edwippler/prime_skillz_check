// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle
function RightTriangle(side1, side2, base) {
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;
  this.area = function (){
    return (side1 * base) / 2;
  }
  this.perimeter = function(){
    return side1 + side2 + base;
  }
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var littleTriangle = new RightTriangle(3, 5, 4);
console.log(littleTriangle.area);
console.log(littleTriangle.perimeter);

var biggerTriangle = new RightTriangle( 30, 50, 40);
console.log(biggerTriangle.area);
console.log(biggerTriangle.area);
