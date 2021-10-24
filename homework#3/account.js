class Account {
  constructor(name, balance) {
    this._id = Math.random();
    this.name = name;
    this.balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  credit(amount) {
    return (this.balance += amount);
  }

  debit(amount) {
    if (amount < this.balance) {
      return (thisthis.balance -= amount);
    }
    return "Amount exceeded balance";
  }

  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      return "Amount exceeded balance";
    }
    anotherAccount.balance += amount;
    return (this.balance -= amount);
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }

  toString() {
    return `Account: { id: ${this.id}, name: ${this.name}, balance: ${this.balance}}`;
  }
}
