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

const flatten = function(array) {
  let flattened = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattened = [...flattened, ...element];
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]