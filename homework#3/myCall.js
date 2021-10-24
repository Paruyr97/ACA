Function.prototype.myCall = function(thisArg, ...args) {
  thisArg.func = this;
  thisArg.func(...args);
};
