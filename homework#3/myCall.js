Function.prototype.myCall = function (thisArg, ...args) {
  const key = Symbol("f");
  thisArg[key] = this;
  thisArg[key](...args);
  delete thisArg[key];
};
