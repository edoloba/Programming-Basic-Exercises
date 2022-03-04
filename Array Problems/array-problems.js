// 1. Write a function called “getLastElement”.  Given an array, getLastElement returns the last element of the given array.
function getLastElement(arr) {
    return arr[arr.length - 1];
}
let array = [1, 2, 3];
console.log(getLastElement(array)); // 3

// 2. Write a function called “addToFront”.  Given an array and an element, “addToFront” adds the given element to the 
// front of the given array, and returns the given array.  Note: it should be the SAME array, not a new array.
function addToFront(arr, elem) {
    arr.unshift(elem);
    return arr;
}
addToFront(array, 0);
console.log(array); // [0, 1, 2, 3]

// 3. Write a function called “addToBack”.  Given an array and an element, “addToBack” 
// returns the given array with the given element added to the end.  
// Note: it should be the SAME array, not a new array.
function addToBack(arr, elem) {
    arr.push(elem);
    return arr;
}
addToBack(array, 3);
console.log(array); // [0, 1, 2, 3, 3]

// 4. Write a function called “joinArrays”.  Given two arrays, “joinArrays” 
// returns an array with the elements of “arr1" in order, followed by the elements in “arr2”.
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(array.concat([4, 5, 6])); // [0, 1, 2, 3, 3, 4, 5, 6]

// 5. Write a function called “getElementsAfter”.  Given an array and an index, “getElementsAfter” 
// returns a new array with all the elements after (but not including) the given index.
function getElementsAfter(arr, ind) {
    return arr.slice(ind + 1);
}
console.log('array is: ', array); // [0, 1, 2, 3, 3]
console.log('getElementsAfter', getElementsAfter(array, 2)); // [3, 3]

// 6. Write a function called “getElementsUpTo”.  Given an array and a index, “getElementsUpTo”,
// returns an array with all the elements up to, but not including, the element at the given index.
function getElementsUpTo(arr, ind) {
    return arr.slice(0, ind);
}
let array1 = [1, 2, 3, 4];
console.log('getElementsUpTo :', getElementsUpTo(array1, 2)); // [1, 2]
console.log(array1); 

// 7. Write a function called “getAllElementsButFirst”.  Given an array, “getAllElementsButFirst”
// returns an array with all the elements but the first.
let array2 = ['a', 'b', 'c'];
const getAllElementsButFirst = (arr) => arr.slice(1);
console.log(getAllElementsButFirst(array2)); // [b, c]
console.log(array2); // [a, b, c]

// 8., 9.  Write a function called “getAllElementsButLast”. Given an array, “getAllElementsButLast”
//  returns an array with all the elements but the last.
let array3 = [1, 3, 5];
const getAllElementsButLast = (arr) => arr.slice(0, arr.length -1);
console.log(getAllElementsButLast(array3)); // [1, 3]
console.log(array3); // [1, 3, 5]

// 10. Write a function called “removeFromFront”.  Given an array, “removeFromFront”
// returns the given array with its first element removed.
let array4 = [2, 4, 6];
function removeFromFront(arr) {
    arr.shift();
    return arr;
}
console.log('removeFromFront:', removeFromFront(array4)); // [4, 6]
console.log(array4); // [4, 6]

// 11. Write a function called “removeFromBack”.  Given an array, “removeFromBack”
// returns the given array with its last element removed.
function removeFromBack(arr) {
    arr.pop();
    return arr;
}
let array5 = [7, 11, 13];
console.log('removeFromBack: ', removeFromBack(array5)); // [7, 11]
console.log(array5); // [7, 11]

// 12. Write a function called “removeFromBackOfNew”.  Given an array, “removeFromBackOfNew”
// returns a new array containing all but the last element of the given array.
function removeFromBackOfNew(arr) {
    return arr.slice(0, arr.length - 1);
}
let array6 = [15, 17, 19];
console.log('removeFromBackOfNew: ', removeFromBackOfNew(array6)); // [15, 17]
console.log(array6); // [15, 17, 19]

// 13. Write a function called “removeFromFrontOfNew”.  Given an array, “removeFromFrontOfNew”
// returns a new array containing all but the first element of the given array.
const removeFromFrontOfNew = arr => arr.slice(1);
let array7 = [1, 3, 5, 7];
console.log('removeFromFrontOfNew: ', removeFromFrontOfNew(array7)); // [3, 5, 7]
console.log(array7); // [1, 3, 5, 7]

// 14.  Write a function called “countCharacter”.  Given a string input and a character,
// “countCharacter” returns the number of occurrences of a given character in the given string.
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count += 1;
        }
    }
    return count;
}
console.log(countCharacter('abracadabra', 'a')); // 5

// 15. Write a function called “convertDoubleSpaceToSingle”.  Given a string, “convertDoubleSpaceToSingle”
// returns the passed in string, with all the double spaces converted to single spaces.
function convertDoubleSpaceToSingle(str) {
    return str.split('  ').join(' ');
}
console.log(convertDoubleSpaceToSingle('Hi  John,  how  are  you?')); // 'Hi John, how are you?'

// 16. Write a function called “addToFrontOfNew”.  Given an array and an element, “addToFrontOfNew” 
// returns a new array containing all the elements of the given array, with the given element added to the front.
const addToFrontOfNew = (arr, elem) => [elem, ...arr];
let array8 = [1, 2, 3];
let array9 = addToFrontOfNew(array8, 0);
console.log(array9);
console.log(array8);

// 17. Write a function called “addToBackNew”.  Given an array and an element, “addToBackNew”
// returns a clone of the given array, with the given element added to the end.  
// Important: It should be a NEW array instance, not the original array instance.
function addToBackOfNew(arr, elem) {
    const newArr = [...arr];
    newArr.push(elem);
    return newArr;
}
let array10 = [17, 19, 23];
let array11 = addToBackOfNew(array10, 29);
console.log(array11);
console.log(array10);

// 18. Write a function called “getAllElementsButNth”.  Given an array and an index, “getAllElementsButNth” 
// returns the given array with all the elements but the nth.
// const getAllElementsButNth = (arr, n) => {
//     arr.splice(n - 1, 1);
//     return arr;
// }
const getAllElementsButNth = (arr, n) => arr.splice(n - 1, 1) && arr;

// 18. Write a function called "getAllElementsButNth".  Given an array and an index, "getAllElementsButNth" returns
// a new array with all the elements of the given array but the nth.
// const getAllElementsButNth = (arr, n) => {
    // const newArr = [...arr];
    // newArr.splice(n - 1, 1);
    // return newArr;
// }
let array12 = [1, 2, 3, 4, 5];
console.log('getAllElementsButNth :', getAllElementsButNth(array12, 2)); 
console.log(array12); 

// 19. Write a function called “filterEvenLengthWords”.  Given an array of strings, “filterEvenLengthWords”
// returns an array containing only the elements of the given array whose length is an even number.
// const filterEvenLengthWords = arr => arr.filter(word => word.length % 2 === 0);
const filterEvenLengthWords = arr => {
    const evenLengthWords = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) {
            evenLengthWords.push(arr[i]);
        }
    }
    return evenLengthWords;
}
const array13 = ['hi', 'bye', 'ciao', 'salut'];
console.log('filterEvenLengthWords: ', filterEvenLengthWords(array13)); // ['hi', 'ciao']

// 20. Write a function called “getLengthOfLongestElement”.  Given an array, “getLengthOfLongestElement” 
// returns the length of the longest string in the given array.  Note: it should return 0 if the array is empty.
function getLengthOfLongestElement(arrOfStrings) {
    let maxLength = 0;
    for (let i = 0; i < arrOfStrings.length; i++) {
        if (arrOfStrings[i].length > maxLength) {
            maxLength = arrOfStrings[i].length;
        }
    }
    return maxLength;
}
console.log(getLengthOfLongestElement(array13));

// 21. Write a function called “squareElements”. Given an array of numbers, “squareElements” should 
// return a new array where each element is the square of the element of the given array.
// const squareElements = arr => arr.map(elem => elem * elem);
function squareElements(arr) {
    let squares = [];
    for (let i = 0; i < arr.length; i++) {
        squares[i] = arr[i] * arr[i];
        // squares.push(arr[i] * arr[i]);
    }
    return squares;
}
console.log(squareElements(array12));

// 22. Write a function called “filterOddElements”.  Given an array of numbers, “filterOddElements” 
// returns an array containing only the odd numbers of the given array.
const filterOddElements = (arr) => arr.filter(num => num % 2 !== 0);
console.log(filterOddElements([1, 2, 3, 4, 5]));
