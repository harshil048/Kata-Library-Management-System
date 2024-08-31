class User {
  constructor(userId, name) {
    this.userId = userId; // User ID
    this.name = name; // User name
    this.borrowedBooks = []; // Array to store books borrowed by the user
  }
}

module.exports = User;