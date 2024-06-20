const express = require('express');
const router = express.Router();
const LibraryController = require('../middleware/LibraryController');

//backend/middleware/bookController.js
console.log('in router');

// Add a new library
router.post('/library/create', LibraryController.addLibrary, (req, res) => {
  return res
    .status(200)
    .json({ success: true, libraries: res.locals.libraries });
});

router.get(
  '/library/find/:charterNumber',
  LibraryController.checkLibrary,
  (req, res) => {
    return res.status(200).json(res.locals.libCheck);
  }
);

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
  '/library/:charterNumber',
  LibraryController.addBooks,
  (req, res) => {
    return res.status(201).json({ success: true, libraries: res.locals.Books });
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
