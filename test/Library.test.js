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


});