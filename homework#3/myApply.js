Function.prototype.myApply = function(thisArg, args) {
  thisArg.func = this;
  thisArg.func(args);
};
