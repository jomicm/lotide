// FUNCTION IMPLEMENTATION USING TEMPLATE LITERALS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ==> Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    return `❌❌❌ ==> Assertion Failed: [${actual}] !== [${expected}]`;
  }
};

const countLetters = function(string) {
  const array = string.split(' ').join('').split('');
  const unique = [...new Set(array)];
  const count = unique.map(x => array.filter(y => y === x).length);
  let result = {};
  for (let i = 0; i < unique.length; i++) {
    result[unique[i]] = count[i];
  }
  return result;
};

let result = countLetters('lighthouse in the house');
console.log(result);

const testString = 'lighthouse in the house'.split(' ').join('').split('');
for (let letter of testString) {
  console.log(assertEqual(countLetters('lighthouse in the house')[letter], result[letter]));
}