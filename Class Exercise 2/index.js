// 1.
class Employee {
    constructor (id, firstName, lastName, taxId, salary){
         this.id = id;
         this.firstName = firstName;
         this.lastName = lastName;
         this.taxId = taxId;
         this.salary = salary;
    }
    generatePaySlip() {
        let objectEmploy = {
            employeeId : this.id,
            Name : this.firstName + ' ' + this.lastName,
            TaxId : this.taxId,
            Pay : this.salary / 12
        }
        return objectEmploy;
    }
}
let johnSmith = new Employee (3214, 'John', 'Smith', 4757474983, 40.000);
let susanWhite = new Employee(123, 'Susan', 'White', 1234563, 72.000);

console.log(johnSmith.generatePaySlip());

// 2.
class Manager extends Employee {
    constructor(id, firstName, lastName, taxId, salary) {
        super (id, firstName, lastName, taxId, salary)
        this.managedEmployees = []
    }
    addManagedEmployee(employee){
          this.managedEmployees.push(employee);
    }
    removeManageEmployee(employee) {
        this.managedEmployees.filter((ele, index) => {if(ele.id === employee.id){
            this.managedEmployees.splice(index, index +1)
        }})
    }
}
let edo = new Manager(123, 'Edo', 'Lo', 3762736, 10000);
edo.addManagedEmployee(johnSmith);
edo.addManagedEmployee(susanWhite);
// susanWhite.removeManageEmployee(johnSmith);
// console.log(edo.managedEmployees);
// console.log(edo);
edo.removeManageEmployee(susanWhite);
console.log(edo.managedEmployees)