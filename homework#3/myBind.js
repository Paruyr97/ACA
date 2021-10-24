Function.prototype.myBind = function (thisArg) {
    const that = this;
    return function (...args) {
        return that.apply(thisArg, args);
    };
};
