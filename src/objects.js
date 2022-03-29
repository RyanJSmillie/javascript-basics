const createPerson = (name, age) => {
  // your code here
  return {
  name: name, age: age
  }
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => {
  // your code here
  const results = [];
  for (let i = 0; i < people.length; i++) {
    results.push(people[i].age);
  }
  return results;
};

const findByName = (name, people) => {
  // your code here
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  // your code here
  const result = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === 'Honda') {
      result.push(cars[i]);
    }
  }
  return result;
};

const averageAge = people => {
  // your code here
  let avAge = 0;
  for (let i = 0; i < people.length; i++) {
    avAge += people[i].age;
  }
  return avAge / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  return `Hi , my name is ${name} and I am ${age}!`;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
