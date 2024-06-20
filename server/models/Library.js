const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  // status: { type: String },
});

const LibrarySchema = new mongoose.Schema({
  // id property
  charterNumber: { type: Number, required: true, unique: true },
  booksCatalog: [BookSchema],
});

const Library = mongoose.model('Library', LibrarySchema);

Library.on('index', (error) => {
  if (error) {
    console.error('Error creating indexes:', error);
  }
});

module.exports = Library;
