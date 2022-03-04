// # forEach and map

// **1.** Write a function called `doubleValues` which accepts an array and returns a new array with all the values in the array passed to the function doubled

// Examples:
// ```
// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
// ```

console.log(`------1------`);

function doubleValues(array) {
    // ForEach() method

    // const currentArray = [];
    // array.forEach(element => {
    //     currentArray.push(element * 2);
    // });

    // Solved with map()
    const currentArray = array.map(element => element * 2);
    return currentArray;
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));


// **2.** Write a function called `onlyEvenValues` which accepts an array and returns a new array with only the even values in the array passed to the function

// Examples:
// ```
// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]
// ```


console.log(`------2------`);

function onlyEvenValues(array) {
    const currentArray = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            currentArray.push(element);
        }
    });
    return currentArray;
}
console.log(onlyEvenValues([1, 2, 3])); // [2])
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10])

// **3.** Write a function called `showFirstAndLast` which accepts an array of strings and returns a new array with only the first and last character of each string

// Examples:
// ```
// showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
// ```


console.log(`------3------`);

function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));


// **4.** Write a function called `addKeyAndValue` which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object 

// Examples:
// ```
// addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
// ```


console.log(`------4------`);

function addKeyAndValue(array, key, value) {
    return array.map(element => {
        element[key] = value;
        return element;
    });
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));


// **5.** Write a function called `vowelCount` which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted

// Examples:
// ```
// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
// ```


console.log(`------5------`);

function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];

    // using includes()
    currentArray.forEach((letter) => {
        if (vowelArray.includes(letter)) {
            countObject[letter] = (countObject[letter] || 0) + 1;
        }
    });

    // using filter()
    // vowelArray.forEach(vowel => {
    //     let count = currentArray.filter(letter => letter === vowel);
    //     if (count.length > 0) {
    //         countObject[vowel] = count.length;
    //     };
    // });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};