// 1. Create objects obj1, obj2, and obj3 in such a way that obj3 inherits properties from obj2, and obj2 inherits properties from obj1. 
const Berlin = {
    tvTower : true,
    metro : true,
    sky : 'gray'
}
const Toronto = Object.create(Berlin);
const Vilnius = Object.create(Toronto);
console.log(Toronto);
console.log(Vilnius);
console.log(Vilnius.sky);

// 2. Give each object a property of its own.  What happens when you add a property to obj1?  What happens when you add one to obj3? 
Berlin.country = 'Germany';
console.log(Toronto.country)
Vilnius.country = 'Lithuania';
console.log(Vilnius);
console.log(Toronto.country);
Toronto.country = 'Canada'


// 3. What happens when you delete one in obj1, and what if you delete one in obj3? 
delete Berlin.sky;
console.log(Berlin.sky);
console.log(Toronto.sky);
delete Toronto.country;
console.log(Toronto.country);
Toronto.hockey = true;
console.log(Berlin.hockey); // obj1 DONT INHERIT FROM OBJ2
console.log(Vilnius.hockey); // obj3 inherit from obj2. 
// if you delete a key from the obj1, it will be deleted in all object, if you delete a key from obj3, it will remain in obj1!!!

// 4. Does obj1 inherit properties from some object?  If so, from which one?  How do you know?

// console.log(Berlin.prototype)
// 5. Use Object.keys to log the property names of obj3 to the console, then try to do the same with a for … in loop.  Which property names do you see?
(Object.keys(Vilnius).forEach(x => {console.log(x)}));

for(const keys in Vilnius) {
    console.log(`${keys}: ${Vilnius[keys]}`);
}

console.log('CONSRTUCTION FUNCTION PART 1')
console.log('___________')
// Use a constructor function to create a user with name “Jack” and an isAdmin property of false.
function User (name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
    return 'godzilla'
    //return {name: 'Godzilla'}
}
const user1 = new User('Jack', false)
console.log(user1.name)
// Create two more users using the same procedure.
const user2  = new User('Paul', false);
console.log(user2.isAdmin)
const user3 = new User('Lisa', true);
console.log(user3.name)
// What happens if your constructor function returns { name: 'Godzilla' }?  What if it returns a number?  And what if it has a return statement without an explicit return value?


// Create a getUserInfo method that, when called on user Jack, prints “Jack is not an admin”.  Store this method on the constructor’s prototype object.
User.prototype.getUserInfo = function (){
    if(this.isAdmin === false){
    return `${this.name} is not an admin`;
    } else {
        return `${this.name} is an admin`;
    }
};
console.log(user1.getUserInfo());
console.log(user2.getUserInfo());
console.log(user3.getUserInfo());

console.log('CONSTRUCTION FUNCTIONS PART 2')
console.log('______________')

// Create a Vehicle constructor function of 2 arguments: type and speed, Call the constructor function, passing it “car” for type and 80 for speed, and store the return value in a variable “car”. 
function Vehicle(type, speed) {
    this.type = type,
    this.speed = speed
}
const car = new Vehicle('car', 80);
// Log car to the console.
console.log(car);
// Create a move method on the constructor’s prototype, such that when you call move on car, “I am a car, and I am moving at 80 miles per hour” is printed to the console.
Vehicle.prototype.moveOn = function(){
    return `I am a ${this.type}, and I am moving at ${this.speed} miles per hour.`
}
console.log(car.moveOn());
// Create a bus (type: bus, speed: 120) and a truck (type: truck, speed: 200), using the same procedure.
const bus = new Vehicle('bus', 120);
const truck = new Vehicle('truck', 200);
console.log(bus.moveOn());
console.log(truck.moveOn());


console.log('CONSTRUCTION FUNCTION PART 3')
console.log('_________________')
let player1 = {
    score: 7
};
let player2 = Object.create(player1);
let player3 = Object.create(player1);

player2.score = 2;
player1.score = player3.score * 2;

console.log(player3.score); // 14

let marty = { location: 'Chicago' };
let wendy = Object.create(marty)// - ??? -

console.log(marty === wendy); // false
console.log(wendy.location); // 'Chicago'

marty.location = 'Osage Beach';
console.log(wendy.location); // 'Osage Beach'