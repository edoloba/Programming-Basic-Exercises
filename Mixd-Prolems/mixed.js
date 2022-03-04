// 1.
const sumDigits = function(num) {
    let digitsArr = num.toString().split('');
    if (digitsArr[0] === '-') {
        let numsArr = digitsArr.slice(1).map(digit => Number(digit));
        return numsArr.slice(1).reduce((acc, curr) => acc + curr) - numsArr[0];
    } else {
        return digitsArr.map(digit => Number(digit)).reduce((acc, curr) => acc + curr);
    }
}
// 2. 
function multiplyBetween(num1, num2) {
    if (num2 > num1) {
        let product = 1;
        for (let i = num1; i < num2; i +=1) {
            product *= i;
        }
        return product;
    }
    return 0;
}
console.log(multiplyBetween(1, 4));
console.log(multiplyBetween(4, 1));

// 3.
function transformFirstAndLast(arr) {
    let obj = {};
    if (arr.length > 0) {
        obj[arr[0]] = arr[arr.length - 1];
    }
    return obj;
}
console.log(transformFirstAndLast(['a', 'b', 'c', 'c']));


// 4. 
function transformArrayToObject(arr) {
    let obj = {};
    arr.forEach(function(subArr) {
        obj[subArr[0]] = subArr[1];
    });
    return obj;
    // return Object.fromEntries(arr);
}
console.log(transformArrayToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));

// 5. 
const transformEmployeeData = employeeData => employeeData.map(arr => Object.fromEntries(arr));
console.log(transformEmployeeData([
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]));

// 6. 
function getAllKeys(obj) {
    let outputArr = [];
    for (let key in obj) {
        outputArr.push(key);
    }
    return outputArr;
    // return Object.keys(obj);
}
console.log(getAllKeys({
    a : 'a',
    number : 11,
    hungry : true,
    grammyWins : 1
  }));
  

// 7.
function listAllValues(obj) {
    let outputArr = [];
    for (let key in obj) {
        outputArr.push(obj[key]);
    }
    return outputArr;
    // return Object.values(obj);
}
console.log(listAllValues({
    a : 'a',
    number : 11,
    hungry : true,
    grammyWins : 1
  }));

// 8.
function convertObjectToArray(obj) {
    let arr = [];
    for (let key in obj) {
        let sub = [];
        sub[0] = key;
        sub[1] = obj[key];
        arr.push(sub);
    }
    return arr;
    // return Object.entries(obj);
}
console.log(convertObjectToArray({
    name: 'Holly',
    age: 35,
    role: 'producer'
  }));
  
// 9. 
  var customerData = {
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


function greetCustomer(name) {
    if (customerData[name] === undefined) {
        return 'Welcome! Is this your first time?';
    } else if (customerData[name].visits === 1) {
        return 'Welcome back, ' + name + '! We\'re glad you liked us the first time!';
    } else {
        return `Welcome, back ${name}! So glad to see you again!`;
    }
}
console.log(greetCustomer('Phil'));
console.log(greetCustomer('Howard')); 
console.log(greetCustomer('Joe'));
