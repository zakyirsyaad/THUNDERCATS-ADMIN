
const express = require('express');
const router = express.Router();
const Transaksi = require('../models/transaksi');

// Route untuk mendapatkan data transaksi
router.get('/transaksi', async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
      attributes: ['nama_product', 'jenis_product', 'jumlah_produk', 'harga', 'total_harga', 'status'],
    });
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;