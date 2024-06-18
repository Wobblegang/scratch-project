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

module.exports = mongoose.model('Library', LibrarySchema);
