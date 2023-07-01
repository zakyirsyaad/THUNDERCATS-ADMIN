

const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

// READ - GET
router.get('/product', productController.getProduct);

// READ - GET by ID
router.get('/product/:id', productController.getProductById);

// CREATE - POST
router.post('/product', productController.saveProduct);

// UPDATE - PATCH
// router.patch('/product/:id', productController.updateProduct);

// DELETE - DELETE
// router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
