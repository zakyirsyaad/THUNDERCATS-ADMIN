const express = require('express');

const router = express.Router();
const transaksiController = require("../controller/transaksi");

//get all product
router.get('/', transaksiController.getAlltransaksi);

module.exports = router;