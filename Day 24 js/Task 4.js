class Employee {
    constructor(name,salary){
        this.name = name;
        this.salary = salary;

    }

    displayInfo(){
        console.log("Name:"+ this.name + ", salary:"+ this.salary);
        
    }
}

let emp1 = new Employee("Dinesh",45000);

emp1.displayInfo();