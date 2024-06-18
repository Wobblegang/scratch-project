const Library = require('../models/Library');
const LibraryController = {
  getBooks: async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log('entered getBooks');
      const library = await Library.find({ id: id });
      res.locals.books = library;
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
    const { id } = req.params;
    Library.findOneAndUpdate(
      { id: id },
      { title, author, description, status, addedDate }
    ) //// need to go into catalog property after finding library to update cataltog array with new object
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
  addLibrary: (req, res, next) => {
    console.log('in middelware addLibrary');
    console.log(req);
    const { id } = req.params;
    console.log('this is id', id);
    Library.create({ id }).then((data) => {
      res.locals.libraries = data;
      return next();
    });
  },
};

module.exports = LibraryController;
ts = LibraryController;
