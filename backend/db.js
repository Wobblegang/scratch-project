// backend/config/db.js
const mongoose = require('mongoose');

const mongo_uri= 'mongodb+srv://bensonhpcheng:test1234@scratch.n5hntbi.mongodb.net/?retryWrites=true&w=majority&appName=Scratch'

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
