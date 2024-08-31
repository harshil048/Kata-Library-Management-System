const Library = require('../src/Library');

describe('Library Management System', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  // Test case 1 - Throw an error if user ID is missing
  test('should throw an error if user ID is missing', () => {
    expect(() => library.registerUser(null, 'Alice')).toThrow('User ID is missing.');
  });

  // Test case 2 - Throw an error if name is missing
  test('should throw an error if name is missing', () => {
    expect(() => library.registerUser(1, null)).toThrow('Name is missing.');
  });

  // Test case 3 - Throw an error if user already exists
  test('should throw an error if user already exists', () => {
    library.registerUser(1, 'Alice');
    expect(() => library.registerUser(1, 'Alice')).toThrow('User already exists.');
  });

  // Test case 4 - Add a new user to the library
  test('should add a new user to the library', () => {
    library.registerUser(1, 'Alice');
    const user = library.users.get(1);
    expect(user).not.toBeNull();
    expect(user.name).toBe('Alice');
  });

  // Test case 5 - Throw an error if user ID is missing while getting a user from the library
  test('should throw an error if user ID is missing while getting a user from the library', () => {
    expect(() => library.getUser(null)).toThrow('User ID is missing.');
  });

  // Test case 6 - Throw an error if user is not found while getting a user from the library
  test('should throw an error if user is not found while getting a user from the library', () => {
    expect(() => library.getUser(1)).toThrow('User not found.');
  });

  // Test case 7 - Get a user from the library
  test('should get a user from the library', () => {
    library.registerUser(1, 'Alice');
    const user = library.getUser(1);
    expect(user).not.toBeNull();
    expect(user.name).toBe('Alice');
  });

  // Test case 8 - Throw an error if user ID is missing while removing a user from the library
  test('should throw an error if user ID is missing while removing a user from the library', () => {
    expect(() => library.removeUser(null)).toThrow('User ID is missing.');
  });

  // Test case 9 - Throw an error if user is not found while removing a user from the library
  test('should throw an error if user is not found while removing a user from the library', () => {
    expect(() => library.removeUser(1)).toThrow('User not found.');
  });

  // Test case 10 - Remove a user from the library
  test('should remove a user from the library', () => {
    library.registerUser(1, 'Alice');
    library.removeUser(1);
    const user = library.users.get(1);
    expect(user).toBeUndefined();
  });

  // Test case 11 - Throw an error if ISBN is missing while adding a new book to the library
  test('should throw an error if ISBN is missing while adding a new book to the library', () => {
    expect(() => library.addBook(null, 'JavaScript: The Good Parts', 'Douglas Crockford', 2008)).toThrow('ISBN is required.');
  });

  // Test case 12 - Throw an error if title is missing while adding a new book to the library
  test('should throw an error if title is missing while adding a new book to the library', () => {
    expect(() => library.addBook('11', null, 'Douglas Crockford', 2008)).toThrow('Title is required.');
  });

  // Test case 13 - Throw an error if author is missing while adding a new book to the library
  test('should throw an error if author is missing while adding a new book to the library', () => {
    expect(() => library.addBook('12', 'JavaScript: The Good Parts', null, 2008)).toThrow('Author is required.');
  });

  // Test case 14 - Throw an error if publication year is missing while adding a new book to the library
  test('should throw an error if publication year is missing while adding a new book to the library', () => {
    expect(() => library.addBook('13', 'JavaScript: The Good Parts', 'Douglas Crockford', null)).toThrow('PublicationYear is required.');
  });

  // Test case 15 - Throw an error if book already exists while adding a new book to the library
  test('should throw an error if book already exists while adding a new book to the library', () => {
    library.addBook('14', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    expect(() => library.addBook('14', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008)).toThrow('Books already exists.');
  });

  // Test case 16 - Add a new book to the library 
  test('should add a new book to the library', () => {
    library.addBook('15', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    const book = library.books.get('15');
    expect(book).not.toBeNull();
    expect(book.title).toBe('JavaScript: The Good Parts');
  });

  // Test case 17 - Throw an error if ISBN is missing while getting a book from the library
  test('should throw an error if ISBN is missing while getting a book from the library', () => {
    expect(() => library.getBook(null)).toThrow('ISBN is missing.');
  });

  // Test case 18 - Throw an error if book is not found while getting a book from the library
  test('should throw an error if book is not found while getting a book from the library', () => {
    expect(() => library.getBook('16')).toThrow('Book not found.');
  });

  // Test case 19 - Get a book from the library
  test('should get a book from the library', () => {
    library.addBook('17', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    const book = library.getBook('17');
    expect(book).not.toBeNull();
    expect(book.title).toBe('JavaScript: The Good Parts');
  });

  // Test case 20 - Throw an error if ISBN is missing while removing a book from the library
  test('should throw an error if ISBN is missing while removing a book from the library', () => {
    expect(() => library.removeBook(null)).toThrow('ISBN is missing.');
  });

  // Test case 21 - Throw an error if book is not found while removing a book from the library
  test('should throw an error if book is not found while removing a book from the library', () => {
    expect(() => library.removeBook('18')).toThrow('Book not found.');
  });

  // Test case 22 - Remove a book from the library
  test('should remove a book from the library', () => {
    library.addBook('19', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    library.removeBook('19');
    const book = library.books.get('19');
    expect(book).toBeUndefined();
  });

  // Test case 23 - Throw an error if user ID is missing while borrowing a book
  test('should throw an error if user ID is missing while borrowing a book', () => {
    expect(() => library.borrowBook(null, '20')).toThrow('User ID is missing.');
  });

  // Test case 24 - Throw an error if ISBN is missing while borrowing a book
  test('should throw an error if ISBN is missing while borrowing a book', () => {
    expect(() => library.borrowBook(1, null)).toThrow('ISBN is missing.');
  });

  // Test case 25 - Throw an error if user is not found while borrowing a book
  test('should throw an error if user is not found while borrowing a book', () => {
    expect(() => library.borrowBook(1, '21')).toThrow('User not found.');
  });

  // Test case 26 - Throw an error if book is not found while borrowing a book
  test('should throw an error if book is not found while borrowing a book', () => {
    library.registerUser(1, 'Alice');
    expect(() => library.borrowBook(1, '22')).toThrow('Book not found.');
  });

  // Test case 27 - Throw an error if book is not available while borrowing a book
  test('should throw an error if book is not available while borrowing a book', () => {
    library.registerUser(1, 'Alice');
    library.addBook('23', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    library.borrowBook(1, '23');
    expect(() => library.borrowBook(1, '23')).toThrow('Books is already borrowed');
  });

  // Test case 28 - Borrow a book from the library
  test('should borrow a book from the library', () => {
    library.registerUser(1, 'Alice');
    library.addBook('24', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    library.borrowBook(1, '24');

    const user = library.users.get(1);
    const book = library.books.get('24');

    expect(user.borrowedBooks).toContain(book);
    expect(book.isAvailable).toBe(false);
  });

  // Test case 29 - Throw an error if user ID is missing while returning a book
  test('should throw an error if user ID is missing while returning a book', () => {
    expect(() => library.returnBook(null, '25')).toThrow('User ID is missing.');
  });

  // Test case 30 - Throw an error if ISBN is missing while returning a book
  test('should throw an error if ISBN is missing while returning a book', () => {
    expect(() => library.returnBook(1, null)).toThrow('ISBN is required.');
  });

  // Test case 31 - Throw an error if user is not found while returning a book
  test('should throw an error if user is not found while returning a book', () => {
    expect(() => library.returnBook(1, '26')).toThrow('User not found.');
  });

  // Test case 32 - Throw an error if book is not found while returning a book
  test('should throw an error if book is not found while returning a book', () => {
    library.registerUser
    library.registerUser(1, 'Alice');
    expect(() => library.returnBook(1, '27')).toThrow('Book not found.');
  });

  // Test case 33 - Throw an error if book was not borrowed while returning a book
  test('should throw an error if book was not borrowed while returning a book', () => {
    library.registerUser(1, 'Alice');
    library.addBook('28', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    expect(() => library.returnBook(1, '28')).toThrow('Books was not borrowed');
  });

  // Test case 34 - Return a book to the library
  test('should return a book to the library', () => {
    library.registerUser(1, 'Alice');
    library.addBook('29', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    library.borrowBook(1, '29');
    library.returnBook(1, '29');

    const user = library.users.get(1);
    const book = library.books.get('29');

    expect(user.borrowedBooks).not.toContain(book);
    expect(book.isAvailable).toBe(true);
  });

  // Test case 35 - Throw an error if user ID is missing while getting borrowed books
  test('should throw an error if user ID is missing while getting borrowed books', () => {
    expect(() => library.getBorrowedBooks(null)).toThrow('User ID is missing.');
  });

  // Test case 36 - Throw an error if user is not found while getting borrowed books
  test('should throw an error if user is not found while getting borrowed books', () => {
    expect(() => library.getBorrowedBooks(1)).toThrow('User not found.');
  });

  // Test case 37 - Get all books borrowed by a user
  test('should get all books borrowed by a user', () => {
    library.registerUser(1, 'Alice');
    library.addBook('30', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    library.addBook('31', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    library.borrowBook(1, '30');
    library.borrowBook(1, '31');

    const books = library.getBorrowedBooks(1);
    expect(books).toHaveLength(2);
    expect(books[0].ISBN).toBe('30');
  });

});