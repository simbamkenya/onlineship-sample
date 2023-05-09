const express = require('express');
const router = express();

const { Order } = require('../models/order')


router.get('/', (req, res) => {
    res.send('orders')
}) 

module.exports = router;