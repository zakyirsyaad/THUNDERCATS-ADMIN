

const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

// READ - GET
// router.get('/products', productController.getAllProduct);

// // READ - GET by ID
// router.get('/products/:id', getProductById);

// CREATE - POST
router.post('/product', productController.saveProduct);

// UPDATE - PATCH
// router.patch('/products/:id', updateProduct);

// // DELETE - DELETE
// router.delete('/products/:id', deleteProduct);

module.exports = router;
