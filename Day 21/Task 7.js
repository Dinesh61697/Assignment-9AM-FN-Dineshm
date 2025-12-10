let numbers = [10, 20, 30, 40, 50];
let searchValue = 30;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchValue) {
        console.log("Value found at index " + i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Value not found in the array");
}
