const Library = require('../models/Library');
const LibraryController = {
  getBooks: async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log('entered getBooks');
      const library = await Library.findOne({ charterNumber: id });
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
    const { id } = req.params;
    const newBook = { title, author, genre };
    Library.findOne({ charterNumber: id })
      .then((library) => {
        library.booksCatalog.push(newBook);
        library.save();
        res.locals.Books = library;

        // console.log(res.locals.Books);
        return next();
      })
      //// need to go into catalog property after finding library to update cataltog array with new object

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
    const { id } = req.params;
    const book = req.body;
    Library.findOne({ charterNumber: id }).then((data) => {
      data.booksCatalog.remove({ _id: book });
      res.locals.deleted = data;
      return next();
    });
  },

  addLibrary: (req, res, next) => {
    console.log('in middelware addLibrary');
    console.log(req);
    const { id } = req.params;
    console.log('this is id', id);
    Library.create({ charterNumber: id }).then((data) => {
      res.locals.libraries = data;
      return next();
    });
  },
};

module.exports = LibraryController;
ts = LibraryController;
