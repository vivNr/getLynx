/*
Note:This all apis is public... no need authorization
*/
const express = require('express');
const router = express.Router();

const {getProduct,getProducts} = require('../controllers/product.controller');
router.get('/product', getProduct);
router.get('/products', getProducts);


module.exports = router;
