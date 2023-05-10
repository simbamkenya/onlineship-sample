const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
    }],
    
});


exports.Order = mongoose.model('Order', orderSchema);