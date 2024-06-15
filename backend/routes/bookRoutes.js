const express = require('express');
const router = express.Router();
const bookController = require('../middleware/bookControllers');

//backend/middleware/bookController.js

router.get('/books', bookController.getBooks, async (req,res) => {
})

//CRUD Functions

//add book route
router.post('/books/add', bookController.addBooks, (req, res) => {
    res.status(201).json(res.locals.newBook)
});


  


module.exports = router;