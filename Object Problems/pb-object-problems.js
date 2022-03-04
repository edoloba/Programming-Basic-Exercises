// 1. remove properties whose values are arrays
function removeArrayValues(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
}
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
};

removeArrayValues(obj);
console.log(obj);

// 2. remove number values
function removeNumberValues(obj){
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            delete obj[key];
        }
    }
}
let obj2 = {
    a: 2,
    b: 'remaining',
    c: 4
};
removeNumberValues(obj2);
console.log(obj2);

// 3. remove string values
function removeStringValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            delete obj[key];
        }
    }
}
let obj3 = {
    name: 'Sam',
    age: 20
};
removeStringValues(obj3);
console.log(obj3);

// 4. remove properties whose values are numbers larger than the given number
function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
        if (obj[key] > num) {
            delete obj[key];
        }
    }
}
let obj4 = {
    a: 8,
    b: 2,
    c: 'montana'
};
removeNumbersLargerThan(5, obj4);
console.log(obj4);

// 5. select
function select(arr, obj) {
    let newObj = {};
    for (let elem of arr) {
        if (obj[elem]) {
            newObj[elem] = obj[elem];
        }
    }
    return newObj;
}

let arr5 = ['a', 'c', 'e'];

let obj5 = {
    a: 1,
    b: 2, 
    c: 3,
    d: 4
};

console.log(select(arr5, obj5));

// 6. return array of those elements of the array at obj[key] that are less than 100
function getElementsLessThan100AtProperty(obj, key) {
    return obj[key].filter(function(elem) {
        return elem < 100;
    });
}

let obj6 = {
    prop: [1000, 20, 50, 500]
};
console.log(getElementsLessThan100AtProperty(obj6, 'prop'));

// 7. return array of odd length words
function getOddLengthWordsAtProperty(obj, key) {
    return obj[key].filter(function(elem) {
        // return elem.length % 2;
        return elem.length % 2 === 1;
    });
}

let obj7 = {
    prop: ['It', 'has', 'some', 'words']
};

console.log(getOddLengthWordsAtProperty(obj7, 'prop'));

// 8. get average of elements
function getAverageOfElementsAtProperty(obj, key) {
    if (obj[key] && Array.isArray(obj[key]) && obj[key].length > 0) {
        return (obj[key].reduce(function(acc, curr) {
            return acc + curr;
    }) / obj[key].length);
} else {
    return 0; 
}
}

let obj8 = {
    property: [1, 2, 3],
    foo: [],
    bar: 'hi'
};
console.log(getAverageOfElementsAtProperty(obj8, 'property'));
console.log(getAverageOfElementsAtProperty(obj8, 'foo'));
console.log(getAverageOfElementsAtProperty(obj8, 'bar'));
console.log(getAverageOfElementsAtProperty(obj8, 'baz'));

// 9.
function getEvenLengthWordsAtProperty(obj, key) {
    if (obj[key] && Array.isArray(obj[key])) {
        return obj[key].filter(function(str) {
            return str.length % 2 === 0;
        });
    } else {
        return [];
    }
}

let obj9 = {
    prop: ['a', 'long', 'game', 2],
    foo: [],
    bar: 'hi'
};

console.log(getEvenLengthWordsAtProperty(obj9, 'prop'));
console.log(getEvenLengthWordsAtProperty(obj9, 'foo'));
console.log(getEvenLengthWordsAtProperty(obj9, 'bar'));
console.log(getEvenLengthWordsAtProperty(obj9, 'baz'));


// 10. get squared elements at property
function getSquaredElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].map(function(elem) {
            return elem * elem;
        });
    } else {
        return [];
    }
}
let obj10 = {
    key: [2, 1, 5],
    foo: [],
    bar: ''
};
console.log(getSquaredElementsAtProperty(obj10, 'key'));
console.log(getSquaredElementsAtProperty(obj10, 'foo'));
console.log(getSquaredElementsAtProperty(obj10, 'bar'));
console.log(getSquaredElementsAtProperty(obj10, 'baz'));

// 11. 
function getSmallestElementAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        let sortedArr = obj[key].sort(function(a, b) {
            return a - b;
        });
        return sortedArr[0];
    } else {
        return [];
    }
}
let obj11 = {
    key: [2, 1, 5],
    foo: [],
    bar: ''
};
console.log(getSmallestElementAtProperty(obj11, 'key'));
console.log(getSmallestElementAtProperty(obj11, 'foo'));
console.log(getSmallestElementAtProperty(obj11, 'bar'));
console.log(getSmallestElementAtProperty(obj11, 'baz'));

// 12. 
function getLargestElementAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        let sortedArr = obj[key].sort(function(a, b) {
            return b - a;
        });
        return sortedArr[0];
    } else {
        return [];
    }
}
console.log(getLargestElementAtProperty(obj11, 'key'));
console.log(getLargestElementAtProperty(obj11, 'foo'));
console.log(getLargestElementAtProperty(obj11, 'bar'));
console.log(getLargestElementAtProperty(obj11, 'baz'));

// 13.
function getAllButLastElementOfProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key].slice(0, obj[key].length - 1);
    } else {
        return [];
    }
}
let obj13 = {
    key: [2, 1, 5],
    foo: [],
    bar: ''
};
console.log(getAllButLastElementOfProperty(obj13, 'key'));
console.log(getAllButLastElementOfProperty(obj13, 'foo'));
console.log(getAllButLastElementOfProperty(obj13, 'bar'));
console.log(getAllButLastElementOfProperty(obj13, 'baz'));

// 14.
function getProductOfAllElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key].reduce(function(acc, curr) {
            return acc * curr;
        }, 1);
    } else {
        return [];
    }
}
let obj14 = {
    key: [1, 2, 3, 4],
    foo: [],
    bar: ''
};
console.log(getProductOfAllElementsAtProperty(obj14, 'key'));
console.log(getProductOfAllElementsAtProperty(obj14, 'foo'));
console.log(getProductOfAllElementsAtProperty(obj14, 'bar'));
console.log(getProductOfAllElementsAtProperty(obj14, 'baz'));

// 15.
function sumDigits(num) {
    let inputStr = num.toString();
    let digitsArr = inputStr.split('');
    if (digitsArr[0] !== '-') {
        let numsArr = digitsArr.map(function(digit) {
            return Number(digit);
        });
        return numsArr.reduce(function(acc, curr) {
            return acc + curr;
        });
    } else {
        let posDigitsArr = digitsArr.slice(2);
        let posNumsArr = posDigitsArr.map(function(digit) {
            return Number(digit);
        });
        let sum = posNumsArr.reduce(function(acc, curr) {
            return acc + curr;
        });
        let negDigit = digitsArr[1];
        let negNum = Number(negDigit);
        return sum - negNum;
    }
}
console.log(sumDigits(1234)); // 10
console.log(sumDigits(-1234)); // 8

// 16.
function getSumOfAllElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key].reduce(function(a, b) {
            return a + b;
        });
    } else {
        return 0;
    }
}
let obj16 = {
    key: [4, 1, 8],
    foo: 'hi',
    bar: []
}
console.log(getSumOfAllElementsAtProperty(obj16, 'key')); // 13
console.log(getSumOfAllElementsAtProperty(obj16, 'foo')); // 0
console.log(getSumOfAllElementsAtProperty(obj16, 'bar')); // 0
console.log(getSumOfAllElementsAtProperty(obj16, 'baz')); // 0

// 17.
function modulo(num1, num2) {
  let sign = 1;
  if (num1 < 0) {
    sign = -1;
  }
  
  if (num2 === 0 || num1 !== num1 || num2 !== num2) { // 'num1 !== num1' is true only if num1 is NaN. 
    return NaN;
  } else {
    abs1 = Math.abs(num1);
    abs2 = Math.abs(num2)
    while (abs1 >= abs2) {
        abs1 -= abs2;
    }
    return sign * abs1;
  }
}
console.log(5 % 3); // 2
console.log(modulo(5, 3)); //2
console.log(2 % 3); // 2
console.log(modulo(2, 3)); //2
console.log(-3 % 2); // -1
console.log(modulo(-3, 2)); //-1
console.log(18 % 7); // 4
console.log(modulo(18, 7)); // 4
console.log(modulo(0, 7)); // 0
console.log(modulo(18, 0)); // NaN
console.log(modulo(NaN, 7)); //  NaN
console.log(modulo(7, NaN)); // NaN
console.log(modulo(-18, 7)); // -4
console.log(modulo(-18, 3)); // -0

// 18.
function isOddWithoutModulo(num) {
    return num / 2 !== Math.floor(num / 2);
}
function isOddWithModulo(num) {
    return num % 2 !== 0;
}
console.log(isOddWithModulo(2)); // false
console.log(isOddWithoutModulo(2)); // false
console.log(isOddWithModulo(3)); // true
console.log(isOddWithoutModulo(3)); // true
console.log(isOddWithModulo(-3)); // true
console.log(isOddWithoutModulo(-3)); // true
console.log(isOddWithModulo(0)); // false
console.log(isOddWithoutModulo(0)); // false
