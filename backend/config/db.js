// backend/config/db.js
const mongoose = require('mongoose');

const mongo_uri= 'mongodb+srv://mikeeybui91:yC4t7F1VFnsnmi1o@cluster0.k0nokyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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
