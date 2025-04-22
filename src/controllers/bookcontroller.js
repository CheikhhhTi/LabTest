const Book = require('../models/book');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
};

// Get a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Error fetching book', error: error.message });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    // Validate required fields
    const { title, author, isbn } = req.body;
    if (!title || !author || !isbn) {
      return res.status(400).json({ message: 'Title, author, and ISBN are required fields' });
    }

    // Create the book
    const newBook = await Book.create({
      title,
      author,
      isbn,
      publication_year: req.body.publication_year,
      genre: req.body.genre,
      created_at: new Date(),
      updated_at: new Date()
    });

    res.status(201).json(newBook);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'ISBN must be unique', error: error.message });
    }
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Error creating book', error: error.message });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Update the book fields
    const updatedBook = await book.update({
      ...req.body,
      updated_at: new Date()
    });

    res.status(200).json(updatedBook);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'ISBN must be unique', error: error.message });
    }
    console.error('Error updating book:', error);
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.destroy();
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
};