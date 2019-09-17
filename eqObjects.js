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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && !eqArrays(object1[key], object2[key]))  return false;
    if (!Array.isArray(object1[key]) && (object1[key] !== object2[key])) return false;
  }
  return true;
};

const ab = { a:'1', b:'2' , d:'3'};
const ba = { b: '2', a: '1', d:'3'};
console.log(assertEqual(eqObjects(ab, ba), true));

const abc = { a: '1', b: '2', c: '3'};
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

console.log('Equal>', eqArrays(['2', 3], ['2', 3]));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false