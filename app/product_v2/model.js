const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLengt: 3,
    maxLength: 50,
  },
  price: {
    type: Number,
    reqeuired: true,
    min: 1000,
    max: 100000000,
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
  },
})

const Product = mongoose.model('products', productSchema)

module.exports = Product
