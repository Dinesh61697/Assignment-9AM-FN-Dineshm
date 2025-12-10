let students = {
    "Dinesh": true,
    "Santhosh": false,
    "Anbu": false,
};


for (let student in students) {
    if (students[student]) {
        console.log(student + " is Present");
    } else {
        console.log(student + " is Absent");
    }
}
