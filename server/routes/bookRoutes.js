const express = require('express');
const router = express.Router();
const LibraryController = require('../middleware/LibraryController');

//backend/middleware/bookController.js
console.log('in router');

// Add a new library
router.post('/register', LibraryController.addLibrary, (req, res) => {
  console.log('inside of the router.post');
  return res.status(200).json(res.locals.libraries);
});

// Get books for a specific library
router.get(
  '/library/:charterNumber',
  LibraryController.getBooks,
  (req, res) => {
    return res.status(200).json(res.locals.books);
  }
);

//add a book to a specific library
router.patch(
  '/library/:charterNumber/addBook',
  LibraryController.addBooks,
  (req, res) => {
    return res.status(201).json(res.locals.Books);
  }
);

//remove book route
router.delete(
  '/library/delete/:id',
  LibraryController.removeBook,
  (req, res) => {
    return res.status(200).json(res.locals.deleted);
  }
);

module.exports = router;
