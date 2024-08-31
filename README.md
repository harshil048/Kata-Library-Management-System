# Library Management TDD Kata Solution

Welcome to my solution for the Library Management Kata! This repository demonstrates the use of Test-Driven Development (TDD) to build a simple library management system. The project emphasizes small, incremental commits, clear and concise code, and thorough testing.

## Table of Contents

- [Problem Statement](#problem-statement)
- [Requirements](#requirements)
- [Solution](#solution)
- [Features](#features)
  - [User Management](#user-management)
  - [Book Management](#book-management)
  - [Borrowing and Returning Books](#borrowing-and-returning-books)
  - [Viewing Books](#viewing-books)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)

## Problem Statement

Create a simple library management system that allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books.

## Requirements

### Add Books:

- Users should be able to add new books to the library.
- Each book should have a unique identifier (e.g., ISBN), title, author, and publication year.

### Borrow Books:

- Users should be able to borrow a book from the library.
- The system should ensure that the book is available before allowing it to be borrowed.
- If the book is not available, the system should raise an appropriate error.

### Return Books:

- Users should be able to return a borrowed book.
- The system should update the availability of the book accordingly.

### View Available Books:

- Users should be able to view a list of all available books in the library.

## Solution

This project follows TDD principles to solve the kata problem. The solution is built with small, incremental commits, ensuring that each feature is developed and tested in isolation, demonstrating effective TDD practices.

## Features

### User Management

- **registerUser**:  
  Adds a new user to the library's user catalog.

  - Validates that the user ID and name are provided.
  - Throws an exception if the user already exists.

- **getUser**:  
  Retrieves a user from the library by their user ID.

  - Throws an exception if the user ID is missing or the user is not found.

- **removeUser**:  
  Removes a user from the library.
  - Validates that the user ID is provided.
  - Throws an exception if the user does not exist.

### Book Management

- **addBook**:  
  Allows a user to add a book to the library's inventory.

  - Validates that the ISBN, title, author, and publication year are provided.
  - Throws an exception if the book already exists in the library.

- **getBook**:  
  Retrieves a book from the inventory using its ISBN.

  - Throws an exception if the ISBN is missing or the book is not found.

- **removeBook**:  
  Removes a book from the library's inventory.
  - Validates that the ISBN is provided.
  - Throws an exception if the book does not exist.

### Borrowing and Returning Books

- **borrowBook**:  
  Allows a user to borrow a book from the library.

  - Validates that the user ID and ISBN are provided.
  - Throws an exception if the book is already borrowed or unavailable.

- **returnBook**:  
  Allows a user to return a borrowed book to the library.

  - Validates that the user ID and ISBN are provided.
  - Throws an exception if the book was not borrowed by the user.

- **getBorrowedBooks**:  
  Retrieves all books borrowed by a specific user.
  - Validates that the user ID is provided.

### Viewing Books

- **getAvailableBooks**:  
  Returns a list of all books currently available in the library.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.

### Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   https://github.com/harshil048/Kata-Library-Management-System.git
   ```

3. Navigate into the project directory:

   ```bash
   cd Kata-Library-Management-System
   ```

### Install Dependencies

1. Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

### Running Tests

1. The `package.json` file has been updated to include the following script:

   ```json
    "scripts": {
      "test": "jest --coverage"
    }
   ```

   This command will run the tests and generate a coverage report.

2. To run the tests, execute the following command:

   ```bash
   npm test
   ```

# Library Management System - Test Results

## Test Summary

### User Management

- **should throw an error if user ID is missing** (28 ms)
- **should throw an error if name is missing** (2 ms)
- **should throw an error if user already exists** (2 ms)
- **should add a new user to the library** (1 ms)
- **should throw an error if user ID is missing while getting a user from the library** (1 ms)
- **should throw an error if user is not found while getting a user from the library** (1 ms)
- **should get a user from the library** (1 ms)
- **should throw an error if user ID is missing while removing a user from the library** (1 ms)
- **should throw an error if user is not found while removing a user from the library** (1 ms)
- **should remove a user from the library** (1 ms)

### Book Management

- **should throw an error if ISBN is missing while adding a new book to the library** (2 ms)
- **should throw an error if title is missing while adding a new book to the library** (4 ms)
- **should throw an error if author is missing while adding a new book to the library** (1 ms)
- **should throw an error if publication year is missing while adding a new book to the library** (11 ms)
- **should throw an error if book already exists while adding a new book to the library** (2 ms)
- **should add a new book to the library** (1 ms)
- **should throw an error if ISBN is missing while getting a book from the library** (1 ms)
- **should throw an error if book is not found while getting a book from the library** (1 ms)
- **should get a book from the library** (1 ms)
- **should throw an error if ISBN is missing while removing a book from the library** (1 ms)
- **should throw an error if book is not found while removing a book from the library** (1 ms)
- **should remove a book from the library** (1 ms)

### Borrowing and Returning Books

- **should throw an error if user ID is missing while borrowing a book** (1 ms)
- **should throw an error if ISBN is missing while borrowing a book** (1 ms)
- **should throw an error if user is not found while borrowing a book** (1 ms)
- **should throw an error if book is not found while borrowing a book** (1 ms)
- **should throw an error if book is not available while borrowing a book** (1 ms)
- **should borrow a book from the library** (1 ms)
- **should throw an error if user ID is missing while returning a book** (1 ms)
- **should throw an error if ISBN is missing while returning a book** (1 ms)
- **should throw an error if user is not found while returning a book** (1 ms)
- **should throw an error if book is not found while returning a book** (2 ms)
- **should throw an error if book was not borrowed while returning a book** (2 ms)
- **should return a book to the library** (1 ms)

### Book Availability

- **should throw an error if user ID is missing while getting borrowed books** (1 ms)
- **should throw an error if user is not found while getting borrowed books** (1 ms)
- **should get all books borrowed by a user** (1 ms)
- **should get all available books in the library** (1 ms)

## Coverage Report

To view the detailed coverage report, follow these steps:

1. **Run Coverage Report**:

   - Ensure you have run your tests with coverage enabled.
   - Locate the coverage report file at `coverage/lcov-report/index.html`.

2. **Open the Report**:
   - Open the `index.html` file in a web browser to view the full coverage report.

This will provide you with detailed insights into the test coverage of your code.

![Test Coverage Screenshot](https://github.com/user-attachments/assets/7ff6fcb3-8b5b-4d67-b4b6-f925fdce645a)
