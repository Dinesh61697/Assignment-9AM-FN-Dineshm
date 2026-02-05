// 1.What is asynchronous JavaScript? Why is it needed?
// Ans:Asynchronous JavaScript means JavaScript can start
//  a task that takes time (like fetching data from a server)
// // and continue running other code without waiting for that task to finish.



// 2.Explain callback functions with a real-life example?
// Ans:A callback function is a function that is passed a
//     an argument to another function and is executed later,
//     //  usually after a task is completed.



// 3.What is callback hell? Why is it a problem?
// Ans:callback hell is a situation where multiple nested 
// cachesllbacks make the copy deply indented and hard to read.



// 4.Define a Promise and explain its states?
// Ans: A promise in javascript is an object that 
// represents the eventual result of an asynchronous operation.



// 5.Difference between callbacks and promises?
// Ans:Callbacks are function passed into other function
// to run later but can lead to nested hared to read code (callback hell).



// 6.Why is async/await preferred over .then()?
// Ans:async/await is preferred over .then() because it makes asynchronous code look and behave like synchronous code, improving readability and reducing nesting.
// It also makes error handling easier using simple try...catch blocks.



// 7.Can await be used without async? Why?
// Ans:No,await cannot be used without async because it 
// only works insiden an async function,which tells javascript
// to pause execution until the promise is resolved.



// 8.What happens if a promise is rejected?
// Ans:If a Promise is rejected, it moves to the Rejected state and the error can be handled using a .catch() method or a try...catch block (with async/await).
// If not handled, it may cause an unhandled promise rejection error.



// 9.Explain error handling in async/await?
// Ans: In async/await error handling is using try...catch 
//  blocks to catch error from awaited promises.


// 10.write one real-world use case for asynchronous javascript?
// Ans: Fetching data for a server (like user details from an API)
// without freezing the webpage is a real-world use of asynchronous
// javascript.













