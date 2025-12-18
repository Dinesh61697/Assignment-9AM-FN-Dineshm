class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  display() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
    );
  }
}


const student1 = new Student("Dinesh", 21, "Frontend Development");
const student2 = new Student("Anbarasu", 22, "Backend Development");
const student3 = new Student("Santhosh", 20, "Java fullstack");


student1.display();
student2.display();
student3.display();
