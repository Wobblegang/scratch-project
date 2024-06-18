const express = require('express');
const router = express.Router();
const LibraryController = require('../middleware/LibraryController');

//backend/middleware/bookController.js
console.log('in router');
router.post('/library/:id', LibraryController.addLibrary, (req, res) => {
  console.log('inside of the router.post');
  return res.status(200).json(res.locals.libraries);
});

router.get('/library/:id', LibraryController.getBooks, (req, res) => {
  return res.status(200).json(res.locals.books);
});

//add book route
router.post('/books/add', LibraryController.addBooks, (req, res) => {
  return res.status(201).json(res.locals.newBook);
});

//remove book route
router.delete('/books/:bookId', LibraryController.removeBook, (req, res) => {
  return res.status(200).json(res.locals.deletedBook);
});

module.exports = router;
