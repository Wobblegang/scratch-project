// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const libraryRoutes = require('./routes/bookRoutes');
const PORT = 3000;

const app = express();
connectDB();
console.log('ServerConnected');

app.use(cors());
app.use(express.json());

//entering bookRoutes
app.use('/api', libraryRoutes);

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
