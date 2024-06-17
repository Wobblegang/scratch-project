const express = require('express');
const router = express.Router();
const bookController = require('../middleware/bookController');

//backend/middleware/bookController.js

router.get('/books', bookController.getBooks, async (req,res) => {
})

//CRUD Functions

//add book route
router.post('/books/add', bookController.addBooks, (req, res) => {
   return res.status(201).json(res.locals.newBook)
});


  


module.exports = router;