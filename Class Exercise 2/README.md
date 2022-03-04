# Extending Classes

#### 1. Employee Class

- Create an `Employee` class which accepts:

  - `id` of the employee as a number
  - `firstName` of the employee as a string
  - `lastName` of the employee as as string
  - `taxId` as a number
  - `salary` as a number

- The `Employee` class should have a `generatePaySlip` method which returns:

```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> will need to be calculated based off of salary
```

#### 2. Manager Class

- Create a `Manager` class which extends the `Employee` class

- The `Manager` class will need the addition of a `managedEmployees` array

- The `Manager` class will need two methods:
  - `addManagedEmployee` to add a managed employe to the `managedEmployees` array
  - `removeManagedEmployee` to remove a managed employee from the `managedEmployees` array
