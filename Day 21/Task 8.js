let correctPassword = "1594";
let userInput;

do {
    userInput = prompt("Enter your password:");
} while (userInput !== correctPassword);

console.log("Access granted!");