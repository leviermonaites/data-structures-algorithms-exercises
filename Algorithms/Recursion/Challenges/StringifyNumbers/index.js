/*
  Write a function called stringifyNumbers which takes in an object and 
  finds all of the values which are numbers and converts them to strings.
*/

const obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// ES6
const stringifyNumbers = (obj, copy = { ...obj }) => {
  for (const prop in obj) {
    if (typeof obj[prop] === "number") {
      copy[prop] = obj[prop].toString();
    }
    if (obj[prop] instanceof Object) {
      copy = {
        ...copy,
        [prop]: stringifyNumbers(obj[prop], copy[prop]),
      };
    }
  }

  return copy;
};

// ES5
// function stringifyNumbers(obj, copy = Object.assign({}, obj)) {
//   for (const prop in obj) {
//     if (typeof obj[prop] === "number") {
//       copy[prop] = obj[prop].toString();
//     }
//     if (obj[prop] instanceof Object) {
//       Object.assign(copy[prop], stringifyNumbers(obj[prop]));
//     }
//   }

//   return copy;
// }

console.log(stringifyNumbers(obj1));
