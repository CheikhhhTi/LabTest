// src/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Get all books
router.get('/books', bookController.getAllBooks);

// Get a specific book
router.get('/books/:id', bookController.getBookById);

// Create a new book
router.post('/books', bookController.createBook);

// Update a book
router.put('/books/:id', bookController.updateBook);

// Delete a book
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;