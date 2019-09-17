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

const letterPositions = function(string) {
  const array = string.split(' ').join('').split('');
  const unique = [...new Set(array)];
  let result = {};
  for (let letter of unique) {
    let positions = [];
    for (let i = 0; i < string.length; i++) {
      if (letter === string[i])  positions.push(i);
    }
    result[letter] = positions;
  }
  return result;
};

console.log(letterPositions('lighthouse in the house')['l']);

console.log(assertArraysEqual(letterPositions('lighthouse in the house')['l'], [0]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['i'], [1, 11]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['g'], [2]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['t'], [4, 14]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['o'], [6, 19]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['u'], [7, 20]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['s'], [8, 21]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['e'], [9, 16, 22]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house')['n'], [12]));