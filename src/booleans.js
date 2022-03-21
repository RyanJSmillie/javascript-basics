function negate(a) {
  return !a;
  // your code here
};

function both(a, b) {
  return a && b;
  // your code here
};

function either(a, b) {
  return a || b;
  // your code here
};

function none(a, b) {
  return !(a || b);
  // your code here
};

function one(a, b) {
  return !(a === b);
  // your code here
};

function truthiness(a) {
  return !!a;
  // your code here
};

function isEqual(a, b) {
  return a === b;
  // your code here
};

function isGreaterThan(a, b) {
  return a > b;
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
  // your code here
};

function isOdd(a) {
  return !(a % 2 == 0);
  // your code here
};

function isEven(a) {
  return (a % 2 == 0);
  // your code here
};

function isSquare(a) {
  return a > 0 && Math.sqrt() % Math.sqrt() === 0;
  // your code here
};

function startsWith(char, string) {
  return string.startsWith(char);
  // your code here
};

function containsVowels(string) {
  return !(string === string - 'o' - 'a' - 'e' - 'i' - 'u');
  // your code here
};

function isLowerCase(string) {
  return string == string.toLowerCase();
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
