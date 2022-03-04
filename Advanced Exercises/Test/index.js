// Answer Sheet - all answers should go here 
// Abgabe Datei - Alle Lösungen müssen hier stehen.

/* 
except for A-1 and C, you will always write a function that returns values
Mit Ausnahme von A-1 und C, sollen immer Funktionen mit Rückgabewerten geschrieben werden.
*/

/* A-1 (5)
define and fill an object
Definiere und fülle ein Objekt */
const profileData = {
    name : 'Edo',
    surname : 'Lovino',
    age : 31,
    city: 'Berlin'
};

/* A-2 (5) */
let example = {
    '1': 10,
    '2': 20,
    '3': 30
}
const convertObjectToArray = (obj) => Object.entries(obj);

console.log(convertObjectToArray(example));

/* B-1 (10) */
let beverages = ["coffee", "tea", "juice"];
const convertArrayData = (array) => {
      let newOrder = [];
      newOrder.push(array[1]);
      newOrder.push(array[0]);
      newOrder.push('milk');
      return newOrder;
      
}
console.log(convertArrayData(beverages));

/* B-2 (15) */
let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];
const convertArraysToObject = cities.reduce((acc, value, i) => (acc[value] = areas[i], acc), {});
console.log(convertArraysToObject);

/* B-3 (10) */
const createGrid = (item, numb) => {
    let arr = [];
    for(let i = 0; i < numb; i++) {
        let arr1 = [];
        arr.push(arr1);
        for(let x = 0; x < numb; x++) {
            arr1.push(item);
        }
    
    }
    return arr;
};
console.log(createGrid('*', 3))

/* B-4 (10) */
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
const wordConverter = (arr, string) => {
    return arr.map(word => `${word}${string}`)
};
console.log(wordConverter(adjectives, "er"));


/* B-5 (10) */
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];
const calculateHours = (obj) => {
    let total = 0;
    for(let i = 0; i < obj.length; i++){
       total += obj[i].end - obj[i].start;
    }
    return total;
    // let mondayStart = new Date('12 October, 2021 08:00')
    // let mondaEnd = new Date('12 October,2021 17:00')
    // let hm = Math.abs(mondaEnd.getHours() - mondayStart.getHours());
    // let tuesdayStart = new Date('13 October, 2021 09:00');
    // let tuesdayEnd = new Date('13 October, 2021 15:00');
    // let ht = Math.abs(tuesdayEnd.getHours() - tuesdayStart.getHours());
    // let wednesdayStart = new Date('14 October, 2021 10:00');
    // let wednesdayEnd = new Date('14 October, 2021 18:00');
    // let hw = Math.abs(wednesdayEnd.getHours() - wednesdayStart.getHours());
    // let thursdayStart = new Date('15 October, 2021 07:00');
    // let thursdayEnd = new Date('15 October, 2021 14:00');
    // let hth = Math.abs(thursdayEnd.getHours() - thursdayStart.getHours());
    // let fridayStart = new Date('16 October, 2021 06:00');
    // let fridayEnd = new Date('16 October, 2021 12:00');
    // let hf = Math.abs(fridayEnd.getHours() - fridayStart.getHours());
    // return hm + ht + hw + hth + hf;
}
console.log(calculateHours(hourTracking));

/* C (10) 
write a class
schreibe eine Klasse */
class Course {
    constructor(teacher, type, number){
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }
    spaceNeeded() {
        this.number * 2;
         return `The classroom should be ${this.number *2}m² `
    }
    details() {
       return `This is a ${this.type} coure taught by ${this.teacher}. There are ${this.number} students takig the course.`
    }
}
let user1 = new Course ('John Smith', 'web development', 22)
console.log(user1.spaceNeeded());
console.log(user1.details());

/* D-1 (10) */
// const capitalizeFirstLetter = (string) => {
//     string.toString();
//     return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// };
// console.log(capitalizeFirstLetter('hey there'));
// console.log(capitalizeFirstLetter(true));

/* D-2 (15) */
const validPin = num => !isNaN(parseInt(num)) && num[num.length - 1] % 2 === 0 && num.length === 4 && Object.keys(num.split('').reduce((a, v) => ({ ...a, [v]: v}), {})).length > 1 && num.split('').map(Number).reduce((a, b) => a + b) >= 5; 

console.log(validPin("1234"));

console.log(validPin("1235"));// last number should be even


console.log(validPin("wwww"));// should only consist of numbers


console.log(validPin("12345"));// should be 4 digits, not 5


console.log(validPin("2222"));// not at least 2 different digits


console.log(validPin("1000"));// sum of digits is less 5


console.log(validPin("2224"));


// Do not edit or answer below this line
// Bearbeite die letzte Zeile nicht. Das wird vom Unit-Test gebraucht
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
// module.exports = {profileData, convertObjectToArray, convertArrayData, convertArraysToObject, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};
