const express = require('express')
const router = express.Router();
const { Category } = require('../models/category')


router.get('/', (req, res) => {
  res.send('categories')
});


module.exports = router;