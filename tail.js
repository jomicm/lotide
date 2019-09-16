// FUNCTION IMPLEMENTATION USING TEMPLATE LITERALS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ==> Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    return `❌❌❌ ==> Assertion Failed: [${actual}] !== [${expected}]`;
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0)  continue;
    tailArray.push(array[i]);
  }
  return tailArray;
};

const words = ['Hello', 'Lighthouse', 'Labs'];
const result = tail(words);

console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], 'Lighthouse'));
console.log(assertEqual(result[1], 'Labs'));
console.log('---');
console.log(assertEqual(result.join(''), words[1] + words[2]));

console.log(assertEqual(words.length, 3));