const express = require('express');
const dataProduct = require('./data/product.js')
const router = express.router();

router.get('/', dataProduct.getAllProduct);

router.post('./',dataProduct.createNewProduct)

module.exports = router;