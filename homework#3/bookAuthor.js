class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.toString = this.toString.bind(this);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  toString() {
    return `Author: { name: ${this.name}, email: ${this.email}, gender: ${this.gender}}`;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    this._quantity = value;
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return `Book: { title: ${this.title},
        author: ${this.author.toString()},
        price: ${this.price},
        quantity: ${this.quantity} }`;
  }
}

const author = new Author("Joseph Campbell", "campbell@gmail.com", "male");
const book = new Book("The Hero with a Thousand Faces", author, 100, 18);

console.log(book.toString());
