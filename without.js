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

const without = function(origArray, removeElements) {
  let filteredArray = [];
  for (let element of origArray) {
    if (removeElements.indexOf(element) < 0)  filteredArray.push(element);
  }
  return filteredArray;
};

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3])); // => [2, 3]
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2'])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));