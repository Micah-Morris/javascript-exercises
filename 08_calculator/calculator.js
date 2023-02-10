const add = function(numOne, numTwo) {
	let answer = numOne + numTwo;
  return answer;
};

const subtract = function(numOne, numTwo) {
	let answer = numOne - numTwo;
  return answer;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current,);

};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
