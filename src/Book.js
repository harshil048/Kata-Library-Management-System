class Book {
  constructor(ISBN, title, author, publicationYear) {
    this.ISBN = ISBN; // Book ISBN
    this.title = title; // Book title
    this.author = author; // Book author
    this.publicationYear = publicationYear; // Book publication year
    this.isAvailable = true; // Book availability
  }
}

module.exports = Book;