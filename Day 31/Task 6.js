
const userList = document.getElementById("userList");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
