const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModel = new Schema({
       name: {required: true, type: String},
       state: { required: true, type: Boolean },
       description: { required: true, type: String},
       price: {required: true, type:Number},
       quantity: {required: true, type:Number},
       expiryDate: {required: true, type:Date, default: new Date},
       manufactureDate: {required: true, type: Date, default: new Date}

});

module.exports = mongoose.model('product',ProductModel);