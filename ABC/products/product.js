const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;