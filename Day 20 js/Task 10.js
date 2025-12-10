
// Creating unique user IDs using Symbols
let user1 = {
    id: Symbol("userID"),
    name: "Dinesh"
};

let user2 = {
    id: Symbol("userID"),
    name: "Dhanush"
};

let user3 = {
    id: Symbol("userID"),
    name: "Boomi"
};

console.log(user1.name + " ID:", user1.id);
console.log(user2.name + " ID:", user2.id);
console.log(user3.name + " ID:", user3.id);


console.log("Are user1 and user2 IDs same?", user1.id === user2.id);
