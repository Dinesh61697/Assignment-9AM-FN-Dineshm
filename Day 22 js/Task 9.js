
const multiply = (a, b) => {
    return a * b;
};

const operations = [
    (a, b) => a * b,
    (a, b) => a + b
];

console.log(operations[0](4, 5)); 