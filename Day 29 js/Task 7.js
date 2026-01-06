function fakeApiCall(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Connecting to server...");

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({
          status: 200,
          message: "Login successful",
          token: "abc123xyz"
        });
      } else {
        reject({
          status: 401,
          message: "Invalid username or password"
        });
      }
    }, 2000); 
  });
}


fakeApiCall("admin", "1234")
  .then((response) => {
    console.log("SUCCESS:", response.message);
    console.log("Token:", response.token);
  })
  .catch((error) => {
    console.log("ERROR:", error.message);
  })
  .finally(() => {
    console.log("API call completed");
  });