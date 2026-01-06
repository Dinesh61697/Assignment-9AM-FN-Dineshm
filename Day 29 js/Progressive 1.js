function createUser(name, age) {
    let userName = name;
    let userAge = age;

    return {
        getName: function () {
            return userName;
        },
        getAge: function () {
            return userAge;
        },
        setAge: function (newAge) {
            userAge = newAge;
        }
    };
}

const user1 = createUser("Dinesh", 21);


console.log(user1.getName());
console.log(user1.getAge());

user1.setAge(22);
console.log(user1.getAge());


