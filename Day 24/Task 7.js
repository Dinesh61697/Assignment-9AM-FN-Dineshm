let user = {
  username: "Dinesh",

  in() {
    return this.username;
  },

  lo() {
    return this.username;
  }
};

console.log(user.in()); // Dinesh
console.log(user.lo()); // Dinesh
