function createLoginCounter() {
  let loginAttempts = 0; 

  return function () {
    loginAttempts++;
    console.log(`Login attempt #${loginAttempts}`);

    if (loginAttempts >= 3) {
      console.log("Account locked! Too many login attempts.");
    }
  };
}

const login = createLoginCounter();


login();
login();
login();
login();
