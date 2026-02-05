// 1.How would you handle an API call that takes time to respond?
// Ans:An API call that takes time is handled using asynchronous techniques like async/await or promises.
    //    This prevents blocking the main thread while waiting for the response and allows proper error handling.



// 2.Why should long tasks not block the main thread?
// Ans:Long task should not block the main thread because it handles UI updates and user interactions.


// 3.Which async methods would you choose for a large application and why?
// Ans:async/await is preferred for large applications because it makes asynchronous code easier to read and maintain.
//   It also simplifies error handling using try...catch, improving code clarity and debugging.



// 4.Hoe does promises improve readability?
// Ans: Promises improve readability by organizing asynchronous code into clear .then() and .catch() chains.
//   They avoid deeply nested callbacks, making the code easier to understand and maintain.


// 5.How does async/await simplify debugging?
// Ans:Async/await simplifies debugging by making asynchronous code look and behaviour like synchronous code.