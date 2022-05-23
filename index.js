var curriedAdd = function (x) { return function (y) { return x + y; }; };
console.log(curriedAdd(4)(2));
