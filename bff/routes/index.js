const express = require('express');
const usersController = require('../controllers/usersController');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.post('/users', usersController);
router.get('/books', booksController);
module.exports = router;
