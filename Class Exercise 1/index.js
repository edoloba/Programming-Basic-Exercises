class Employee {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	fullname() {
		console.log(`${this.firstname} ${this.lastname}`);
	}
	email() {
		console.log(`${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`)
	}
	// Complete the code!
}
let emp1 = new Employee('John', 'Smith');
let emp2 = new Employee('Mary', 'Sue');
let emp3 = new Employee('Anthony', 'Walker');
emp1.fullname();
emp1.email();
emp2.fullname();
emp2.email();
emp3.fullname();
emp3.email();
console.log(emp3.firstname);