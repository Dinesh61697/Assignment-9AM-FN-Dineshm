
const createProfile = (name, role = "Student", age) => {
    return `${name} is a ${role}${age ? ` aged ${age}` : ''}.`;
};

console.log(createProfile("Dinesh"));                 
console.log(createProfile("Santhosh", "Teacher", 28));  
console.log(createProfile("Anbu", undefined, 22));