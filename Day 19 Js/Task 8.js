

let isLoggedIn = false; 


function showLoginStatus() {
    if (isLoggedIn) {
        console.log("Welcome back! You are logged in.");
    } else {
        console.log("Please log in to continue.");
    }
}


showLoginStatus();

isLoggedIn = true;

showLoginStatus();
