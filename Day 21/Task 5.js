let person = {
    name: "Dinesh",
    age: 21,
    city: "Tiruvannamalai"
};

for (let key in person) {
    console.log(key, person[key]);
}