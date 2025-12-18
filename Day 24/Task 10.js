function student(name, marks) {
    this.name = name;
    this.marks = marks;
}

const s1 = new student("Dinesh", 85);
const s2 = new student("Anbarasu", 78);

student.prototype.displayResult = function () {
    console.log(this.name + "scored" + this.marks + "marks");
    
};


s1.displayResult();
s2.displayResult();