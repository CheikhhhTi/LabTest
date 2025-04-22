Book Management System

**Name: Cheikh Tidiane DIA**

This is a Book Management System with sequelize ORM using mysql

## API Endpoints

The following API endpoints are available:

- `GET /api/books` - List all books
- `GET /api/books/:id` - Get a specific book by ID
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## CURL commands

- Get all books:
curl -X GET http://localhost:3000/api/books

- Get specific book by ID:
curl -X GET http://localhost:3000/api/books/1

- Create a new book:
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Book example",
    "author": "Author",
    "isbn": "9780743273565",
    "publication_year": 2025,
    "genre": "Genre example"
  }'

- Update an existing book:
curl -X PUT http://localhost:3000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Book example",
    "author": "Author",
    "isbn": "9780743273565",
    "publication_year": 2024,
    "genre": "Genre example"
  }'

- Delete a book:
curl -X DELETE http://localhost:3000/api/books/1


