/*
  Write a function called collectStrings which accepts an object 
  and returns an array of all the values in the object that have a typeof string.
*/

const collectStrings = (obj, arr = []) => {
  for (const prop in obj) {
    if (obj[prop] instanceof Object) {
      arr = collectStrings(obj[prop], arr);
    }
    if (typeof obj[prop] === "string") {
      arr.push(obj[prop]);
    }
  }

  return arr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
