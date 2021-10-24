class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  getArea() {
    return this.width * this.length;
  }

  getPerimeter() {
    return 2 * (this.width + this.length);
  }

  toString() {
    return `Rectangle object: {length: ${this._length}, width: ${this._width}}`;
  }
}
