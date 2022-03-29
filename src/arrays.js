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
  const reverse = strings
    .toString()
    .split('')
    .reverse()
    .join('');
  return reverse;

  // const string = strings.toString();
  // const splitLetter = string.split("");
  // const reverseArray = splitLetter.reverse();
  // const joinArray = reverseArray.join('');
  // const reverseArray2 = joinArray.reverse();
};

const onlyEven = numbers => {
  // your code here
  for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers.length; j++)
    if (numbers[j] % 2 === 1){
      numbers.splice(j,1)
      break;
    }
  }
  return numbers
};

const removeNthElement2 = (index, array) => {
  // your code here
  const result = array.slice();
  result.splice(index, 1);
  return result;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  let results = []

  for (let i = 0; i < strings.length; i++) {
    if (
      strings[i].startsWith('a') ||
      strings[i].startsWith('A') ||
      strings[i].startsWith('e') ||
      strings[i].startsWith('E') ||
      strings[i].startsWith('i') ||
      strings[i].startsWith('I') ||
      strings[i].startsWith('o') ||
      strings[i].startsWith('O') ||
      strings[i].startsWith('u') ||
      strings[i].startsWith('U')
    ) {
      results.push(strings[i]);
    }
  }
  return results;
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  // your code here
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
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
