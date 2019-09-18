const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && !eqArrays(object1[key], object2[key]))  return false;
    if (!Array.isArray(object1[key]) && (object1[key] !== object2[key])) return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    return `✅✅✅ ==> Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
  } else {
    return `❌❌❌ ==> Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !==  arr2.length)  return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const ab = { a:'1', b:'2' , d:'3'};
const ba = { b: '2', a: '1', d:'3'};
console.log(assertObjectsEqual(ab, ba));

const abc = { a: '1', b: '2', z: '3'};
console.log(assertObjectsEqual(ab, abc));