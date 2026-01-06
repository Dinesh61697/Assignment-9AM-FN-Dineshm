function getData() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Name:", data.name);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}

getData();
