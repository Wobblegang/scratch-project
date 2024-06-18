const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
  // id property
  id: { type: Number, required: true },
  booksCatalog: [
    {
      title: { type: String, required: true },
      author: { type: String, required: true },
      genre: { type: String, required: true },
      // status: { type: String },
    },
  ],
});

module.exports = mongoose.model('Library', LibrarySchema);
