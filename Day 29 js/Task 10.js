function addNumbers(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum+=num;
    }


    return sum;
}


console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(5, 10, 15));


