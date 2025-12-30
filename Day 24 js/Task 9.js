class Shape {
  constructor() {
    this.type = "Shape";
  }
}


class Circle extends Shape {
  constructor(radius) {
    super(); 
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}


const circle1 = new Circle(5);


console.log("Circle Area:", circle1.calculateArea());
