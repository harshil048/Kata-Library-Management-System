const User = require('./User');

class Library {
  constructor() {
    this.users = new Map(); // Map to store users in the library by user ID as key and user object as value
  }

  // Add a new user to the library
  registerUser(userId, name) {
    if (!userId) {
      throw new Error("User ID is missing.");
    }
    if (!name) {
      throw new Error("Name is missing.");
    }
    if (this.users.has(userId)) {
      throw new Error("User already exists.");
    }
    const user = new User(userId, name);
    this.users.set(userId, user);
  }

}

module.exports = Library;