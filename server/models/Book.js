const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // description: { type: String },
  genre: { type: String, required: true },
  status: { type: String },
  // addedDate: { type: Date, default: Date.now }
});

// bookSchema.create([
//   {
//     title: 'Cat in Hat',
//     author: 'Dr. Seuss',
//     genre: 'Children',
//     status: 'Good',
//   },
// ]);

module.exports = mongoose.model('Book', bookSchema);
