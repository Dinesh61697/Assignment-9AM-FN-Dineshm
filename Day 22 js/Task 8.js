function checkGrade(marks) {
    if (marks >= 90) {
        return "A";

    } else if (marks >= 75){
        return "B";

    } else if (marks >= 80) {
        return "C";

    } else if (marks >= 60){
        return "D";

    } else {

        return "F";
    }
    
}

let studentMarks = 80;
console.log("Your grade is:" , checkGrade(studentMarks));

