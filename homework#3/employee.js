class Employee {
  constructor(firstName, lastName, position, salary, workingHours) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }

  get workingHours() {
    return this._workingHours;
  }

  set workingHours(value) {
    this._workingHours = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  raiseSalary(percent) {
    this.salary += (this.salary * percent) / 100;
    return this.salary;
  }
}
