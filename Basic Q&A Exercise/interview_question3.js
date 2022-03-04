// What is the value of the keyword this in the following example:
var data = this;
console.log(data); // empty object {}

// What does this function output? Why?
// function logThis(){
//     return this;
// }
// logThis(); // ?

// What does this function output? Why?
// var instructor = {
//     firstName: 'Tim',
//     sayHi: function(){
//         console.log("Hello! " + this.firstName);
//     }
// }
// instructor.sayHi() // ? 'Hello! Tim'

// What does this function output? Why?
// var instructor = {
//     firstName: 'Tim',
//     info: {
//         catOwner: true,
//         boatOwner: true
//     },
//     displayInfo: function(){
//         console.log("Cat owner? " + this.catOwner);
//     }
// }
// instructor.displayInfo() // ? Cat owner? Undefined   it should be this.info.catOwner to get true

// What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}
instructor.info.displayLocation() // ? {}

// What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}
instructor.info.data.logLocation() // Why might we be getting an error here? logLocation is not a function!

// 