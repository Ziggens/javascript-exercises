const add = function(...args) {
	return args.reduce((acc, n) => acc + n, 0);
};

const subtract = function(...args) {
  return args.reduce((acc, n) => acc - n);
};

const sum = function(arr) {
  return add(...arr);
};

const multiply = function(args) {
  return args.reduce((acc, n) => acc * n);
};

const power = function(n, p) {
  if (p == 0) return 1;
  return n * power(n, p - 1);
};

const factorial = function(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
