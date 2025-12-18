let book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,

  describe: function () {
    console.log(
      "Title: " + this.title +
      " Author: " + this.author +
      "Pages: " + this.pages 
    );
  }
};

book.describe();