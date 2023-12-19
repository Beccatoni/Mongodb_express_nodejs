const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
       name: {required: true, type: String},
       state: {required: true, type: true},
       price: {required: true, type:Number},
       quantity: {required: true, type:Number},
       crearteDate: {required: true, type:Date, default: new Date},
       updateTime: {required: true, type: Date, default: new Date}

});

module.exports = mongoose.model('product',ProductSchema);