const User = require('./User');
const Book = require('./Book');

class Library {
  constructor() {
    this.users = new Map(); // Map to store users in the library by user ID as key and user object as value
    this.books = new Map(); // Map to store books in the library by ISBN as key and book object as value
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

  // Get a user from the library
  getUser(userId) {
    if (!userId) {
      throw new Error("User ID is missing.");
    }
    const user = this.users.get(userId);
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  }

  // Remove a user from the library
  removeUser(userId) {
    if (!userId) {
      throw new Error("User ID is missing.");
    }
    if (!this.users.has(userId)) {
      throw new Error("User not found.");
    }
    this.users.delete(userId);
  }


  // Add a new book to the library
  addBook(ISBN, title, author, publicationYear) {
    if (!ISBN) {
      throw new Error("ISBN is required.");
    }
    if (!title) {
      throw new Error("Title is required.");
    }
    if (!author) {
      throw new Error("Author is required.");
    }
    if (!publicationYear) {
      throw new Error("PublicationYear is required.");
    }
    if (this.books.has(ISBN)) {
      throw new Error("Books already exists.");
    }

    const book = new Book(ISBN, title, author, publicationYear);
    this.books.set(ISBN, book);
  }

  // Get a book from the library
  getBook(ISBN) {
    if (!ISBN) {
      throw new Error("ISBN is missing.");
    }
    const book = this.books.get(ISBN);
    if (!book) {
      throw new Error("Book not found.");
    }
    return book;
  }

  // Remove a book from the library
  removeBook(ISBN) {
    if (!ISBN) {
      throw new Error("ISBN is missing.");
    }
    if (!this.books.has(ISBN)) {
      throw new Error("Book not found.");
    }
    return this.books.delete(ISBN);
  }


}

module.exports = Library;