
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ ==> Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    return `❌❌❌ ==> Assertion Failed: [${arr1}] !== [${arr2}]`;
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !==  arr2.length)  return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    if (callback(element)) break;
    result.push(element);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']));

console.log('---');

const data3 = [4, 7, 3, 9, 11, 32, 4];
const results3 = takeUntil(data3, x => x > 10);
console.log(assertArraysEqual(results3, [4, 7, 3, 9]));

console.log('---');

const data4 = ['a', 'Z', 'e', 'STOP', 'W', 'F', 'h'];
const results4 = takeUntil(data4, x => x === 'STOP');
console.log(assertArraysEqual(results4, ['a', 'Z', 'e']));