// backend/config/db.js
const mongoose = require('mongoose');

let mongo_uri;
if (process.env.NODE_ENV === 'test') {
  console.log('connecting to test db');
  mongo_uri =
    'mongodb+srv://lflc-admin:HD5ZKD2QGjC61NBF@lflc-test-db.1ojitek.mongodb.net/?retryWrites=true&w=majority&appName=lflc-test-db';
} else {
  mongo_uri =
    'mongodb+srv://mikeeybui91:yC4t7F1VFnsnmi1o@cluster0.k0nokyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri, {
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
