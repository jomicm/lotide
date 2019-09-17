// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !==  arr2.length)  return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ ==> Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    return `❌❌❌ ==> Assertion Failed: [${arr1}] !== [${arr2}]`;
  }
};

const middle = function(array) {
  if (array.length < 3)  return [];
  const midIndex = array.length % 2 === 0 ? array.length / 2 - 1 : Math.floor(array.length / 2);
  const offset = array.length % 2 === 0 ? 2 : 1;
  return array.slice(midIndex, midIndex + offset);
};

console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2]), [])); // => []
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]
