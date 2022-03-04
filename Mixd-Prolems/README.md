# Mixed Problems

1. Write a function called “sumDigits”.
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
Check out the .toString() method and the Number() function.

2. Write a function called “multiplyBetween”.
Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.
Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0.
```javascript
const output = multiplyBetween(2, 5);
console.log(output); // --> 24
```
3. Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and 2) the last element of the array as that key’s value.
Example input:
```javascript
const input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
```
Function’s return value (output):
```javascript
{
  Queen: 'Beyonce'
}
```
Do not change the input array. Assume all elements in the input array will be of type ‘string’.
Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.
E.g. it should handle input like:
```javascript
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
```
Function’s return value (output):
```javascript
{
  Kevin: 'Coleman'
}
```
4. Write a function ‘transformArrayToObject’ which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Example input:
```javascript
const input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
```
Function’s return value (output):
```javascript
{
  make: 'Ford',
  model: 'Mustang',
  year: 1964
}
```
Do not change the input string. Assume that all elements in the array will be of type ‘string’.
Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

5. Write a function called “transformEmployeeData” that transforms some employee data from one format to another.
The argument will look like this:
```javascript
const input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
```
Given that input, the return value should look like this:
```javascript
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```
Note that the input may have a different number of rows or different keys than the given sample.
For example, let’s say the HR department adds a “tshirtSize” field to each employee record. Your code should flexibly accommodate that.

6. Write a function called “getAllKeys” which returns an array of all the input object’s keys. Example input:
```javascript
const input = {
  name: 'Sam',
  age: 25,
  hasPets: true
};
```
Function’s return value (output):
```javascript
['name', 'age', 'hasPets']
```
Do not use “Object.keys” to solve this prompt.
Note that your function should be able to handle any object passed in it.
E.g. it should also handle an input like:
```javascript
const alternativeInput = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
};
```
Function’s return value (output):
```javascript
['a', 'number', 'hungry', 'grammyWins']
```
7. Write a function called “listAllValues” which returns an array of all the input object’s values. Example input:
```javascript
const input = {
  name: 'Krysten',
  age: 33,
  hasPets: false
};
```
Function’s return value (output):

```javascript
['Krysten', 33, false]
```
Do not use “Object.values” to solve this prompt.
Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:
```javascript
const alternativeInput = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
};
```
Function’s return value (output):
```javascript
['a', 11, true, 1]
```
8. Write a function called “convertObjectToArray” which converts an object literal into an array of arrays, like this:
Argument:
```javascript
const input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
```
Return value:
```javascript
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
```
9. Write a function called “greetCustomer”.
Given a name, “greetCustomer” returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.
The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ):
```javascript
const output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
```
Case 2 - Customer who has visited only once ( ‘visits’ value is 1 ):
```javascript
const output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
```
Case 3 - Repeat customer: ( ‘visits’ value is greater than 1 ):
```javascript
const output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
```
Notes:
Your function should not alter the customerData object to update the number of visits.
Do not hardcode to the exact sample data. This is a BAD IDEA:
```javascript
if (firstName === 'Joe') {
  // do something
}
const customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};
function greetCustomer(firstName) {
  // your code here
}
```
