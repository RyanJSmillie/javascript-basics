const getNthElement = (index, array) => {
  // your code here
  if (index > 3) {
    return array[index - 4];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(a => a.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  const splitString = strings.split(',');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
};

const onlyEven = numbers => {
  // your code here
  return numbers.some(numbers % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.some()
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  // your code here
  let sum = 0;

  for (let i = 0; i < numbers.length; i + 1) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
