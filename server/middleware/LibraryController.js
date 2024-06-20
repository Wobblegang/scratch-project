const Library = require('../models/Library');

const LibraryController = {
  checkLibrary: (req, res, next) => {
    const { charterNumber } = req.params;
    console.log("this is charternum " , charterNumber)
    Library.find({ charterNumber: charterNumber })
      .then((data) => {
        res.locals.libCheck = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error in bookController.checkLibrary',
          message: err,
        });
      });
  },

  getBooks: async (req, res, next) => {
    try {
      const { charterNumber } = req.params;
      console.log('entered getBooks');
      const library = await Library.findOne({ charterNumber: charterNumber });
      res.locals.books = library.booksCatalog;
      return next();
    } catch (err) {
      return next({
        log: 'Error in bookController.getBooks',
        message: err,
      });
    }
  },

  addBooks: (req, res, next) => {
    const { title, author, genre } = req.body;
    const { charterNumber } = req.params;
    const newBook = { title, author, genre };
    Library.findOne({ charterNumber: charterNumber })
      .then((library) => {
        library.booksCatalog.push(newBook);
        library.save();
        res.locals.Books = library;
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
    const { charterNumber } = req.params;
    const book = req.body;
    Library.findOne({ charterNumber: charterNumber })
      .then((data) => {
        data.booksCatalog.remove({ _id: book });
        res.locals.deleted = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error in bookController.removeBook',
          message: err,
        });
      });
  },

  addLibrary: (req, res, next) => {
    console.log('in middelware addLibrary');
    const { charterNumber } = req.body;
    Library.create({ charterNumber: charterNumber })
      .then((data) => {
        res.locals.libraries = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error in bookController.addLibrary',
          message: err,
        });
      });
  },
};

module.exports = LibraryController;
ts = LibraryController;
