import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controller/product"

const express = require('express');
const router = express.Router();

// READ - GET
router.get('/products', getProducts);

// READ - GET by ID
router.get('/products/:id', getProductById);

// CREATE - POST
router.post('/products', saveProduct);

// UPDATE - PATCH
router.patch('/products/:id', updateProduct);

// DELETE - DELETE
router.delete('/products/:id', deleteProduct);

export default router;