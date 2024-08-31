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




});