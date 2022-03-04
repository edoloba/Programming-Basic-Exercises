// 1.
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
let total = orders.reduce(function (accum, item){
    return accum + item.amount;
}, 0);
console.log(total);

// 2.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
let addOne = arrayOfNumbers.map(x => x + 1);
console.log(addOne);

// 3.
let numbers = [1,2,3,11,12,13];
let filterEvens = numbers.filter(even => even % 2 === 0);
console.log(filterEvens);

let numbers2 = [22,2,31,110,6,13];
let filterEvens2 = numbers2.filter(even => even % 2 === 0);
console.log(filterEvens2);

// 4.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
let includeKa = friends.filter(name => name.includes('ka'));
console.log(includeKa);
let includeE = friends.filter(name => name.includes('e'));
console.log(includeE);

let otherSolution = (arr, key) => arr.filter(item => item.includes(key))
console.log(otherSolution(friends, 'ka'))

// 5.
let theArray = [1, 2, 3, 4, 5];
let sum = theArray.reduce((a, b) => a + b );
console.log(sum);
let theArray2 = [6, 7, 7];
let sum2 = theArray2.reduce((a, b) => a + b);
console.log(sum2);

// 6.
let lastArray = [2, 3, 5, 10];
let square = lastArray.map(squared => Math.sqrt(squared));
console.log(square);