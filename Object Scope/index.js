//  1

const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  printDetails() {
    return `${this.firstName} ${this.lastName} is in class ${this.class}.`;
  }
};

console.log(student.printDetails());

// 2

const person = {
    firstName: "Jane", 
    lastName: "Jackson", 
    age: 25, 
    job: "Teacher", 
    city: "Berlin",
    printDetails() {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} who lives in ${this.city}`;
    },
    // 3
    getLengthOfObject () {
        let size = 0;
        let key;
        for  (key in this) {
            if (this.hasOwnProperty(key)) {
                size++;
            }
        }
        return size;
    }
}
console.log(person.printDetails());
console.log(person.getLengthOfObject());

