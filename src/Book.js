class Book {
  constructor(ISBN, title, author, publicationYear) {
    this.ISBN = ISBN;
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.isAvailable = true;
  }
}

module.exports = Book;