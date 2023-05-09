const express = require('express');
const router = express.Router();

const OrderItem = require('../models/orderItem')

router.get('/', (req, res) => {
    res.send('order items')
})

module.exports = router;