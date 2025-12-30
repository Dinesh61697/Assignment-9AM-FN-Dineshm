class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}


class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayManagerInfo() {
    console.log(
      `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    );
  }
}


let mgr1 = new Manager("Dinesh", 75000, "HR");

mgr1.displayInfo();        
mgr1.displayManagerInfo(); 