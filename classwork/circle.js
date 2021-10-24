class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    getArea = () => Math.PI * this.radius ** 2;

    getPerimeter = () => 2 * Math.PI * this.radius;
}
