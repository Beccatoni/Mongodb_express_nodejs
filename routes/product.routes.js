const express = require('express');
const router = express.Router();
const { create } = require('../controllers/product.controllers');

// Define your routes here
router.post('/create', create);


module.exports = router;
