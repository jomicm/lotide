// FUNCTION IMPLEMENTATION USING TEMPLATE LITERALS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ==> Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    return `❌❌❌ ==> Assertion Failed: [${actual}] !== [${expected}]`;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !==  arr2.length)  return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));// => false
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));// => false
console.log(assertEqual(eqArrays([], []), true));// => true
console.log(assertEqual(eqArrays([], ["1", "2", 3]), false));// => false