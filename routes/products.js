const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');

router.get('/', async (req, res) => {
   throw Error("access denied");
})

module.exports = router;
