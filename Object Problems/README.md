# PB-object-problems

1. Write a function called “removeArrayValues”.
Given an object, “removeArrayValues” removes any properties whose values are arrays.

  ```javascript
  const obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }
  ```


2. Write a function called “removeNumberValues”.
Given an object, “removeNumberValues” removes any properties whose values are numbers.
```javascript
const obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
```
3. Write a function called “removeStringValues”.
Given an object, “removeStringValues” removes any properties on the given object whose values are strings.
```javascript
const obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
```
4. Write a function called “removeNumbersLargerThan”.
Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.
```javascript
const obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
```
5. Write a function called “select”.
Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.
Notes:
If keys are present in the given array, but are not in the given object, it should ignore them.
It does not modify the passed in object.
```javascript
const arr = ['a', 'c', 'e'];
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
const output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
```
6. Write a function called “getElementsLessThan100AtProperty”.
Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.
Notes:
If the array is empty, it should return an empty array.
If the array contains no elements less than 100, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
```javascript
const obj = {
  key: [1000, 20, 50, 500]
};
const output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
```
7. Write a function called “getOddLengthWordsAtProperty”.
Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If it contains no odd length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
```javascript
const obj = {
  key: ['It', 'has', 'some', 'words']
};
const output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
```
8. Write a function called “getAverageOfElementsAtProperty”.
Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.
Notes:
If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
```javascript
const obj = {
  key: [1, 2, 3]
};
const output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
```
9. Write a function called “getEvenLengthWordsAtProperty”.
Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If it contains no even length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
```javascript
const obj = {
  key: ['a', 'long', 'game']
};
const output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
```
10. Write a function called “getSquaredElementsAtProperty”.
Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
```javascript
const obj = {
  key: [2, 1, 5]
};
const output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
```
11. Write a function called “getSmallestElementAtProperty”.
Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.
Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
```javascript
const obj = {
  key: [2, 1, 5]
};
const output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```
12. Write a function called “getLargestElementAtProperty”.
Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.
Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
```javascript
const obj = {
  key: [1, 2, 4]
};
const output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```
13. Write a function called “getAllButLastElementOfProperty”.
Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If the property at the given key is not an array, it return an empty array.
If there is no property at the key, it should return an empty array.
```javascript
const obj = {
  key: [1, 2, 3]
};
const output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
```
14.  Write a function called “getProductOfAllElementsAtProperty”.
Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
```javascript
const obj = {
  key: [1, 2, 3, 4]
};
const output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
```
15.  Write a function called “sumDigits”.
Given a number, “sumDigits” returns the sum of all its digits.
```javascript
const output = sumDigits(1148);
console.log(output); // --> 14
```
If the number is negative, the first digit should count as negative.
```javascript
const output = sumDigits(-316);
console.log(output); // --> 4
```
Notes:
In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the “toString” method, as well as the “Number” function.

16.  Write a function called “getSumOfAllElementsAtProperty”.
Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the key, it should return 0.
```javascript
const obj = {
  key: [4, 1, 8]
};
const output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
```

17.  Write a function called “modulo”.
Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.
It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 
Notes:
* Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number, even if the remainder is 0.
```javascript
const output = modulo(25, 4);
console.log(output); // --> 1
```
18.  Write a function called “isOddWithoutModulo”.
Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.
Note:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.
```javascript
const output = isOddWithoutModulo(17);
console.log(output); // --> true
```
