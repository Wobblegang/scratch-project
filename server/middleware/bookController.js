const Book = require('../models/Book');
const bookController = {
  getBooks: async (req, res, next) => {
    try {
      console.log('entered getBooks');
      const books = await Book.find();
      res.locals.books = books;
      return next();
    } catch (err) {
      return next({
        log: 'Error in bookController.getBooks',
        message: err,
      });
    }
  },
  addBooks: (req, res, next) => {
    const { title, author, description, status, addedDate } = req.body;

    Book.create({ title, author, description, status, addedDate })
      .then((data) => {
        console.log('Entered /api/books/add');
        res.locals.newBook = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error while creating new Book',
          status: '500',
          message: err,
        });
      });
  },
  removeBook: (req, res, next) => {
    //continue here
  },
};

module.exports = bookController;
ts = bookController;
