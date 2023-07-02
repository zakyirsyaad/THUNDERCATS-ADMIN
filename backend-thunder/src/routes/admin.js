const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controller/admin');

// Route untuk login admin
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await loginAdmin(email, password);
    
    if (admin) {
      // Admin ditemukan, proses login berhasil
      res.json({
        message: 'Admin login successful',
        data: admin
      });
    } else {
      // Admin tidak ditemukan, proses login gagal
      res.status(401).json({
        message: 'Invalid email or password'
      });
    }
  } catch (error) {
    // Terjadi kesalahan server
    res.status(500).json({
      message: 'Server ERROR',
      serverMessage: error
    });
  }
});

module.exports = router;
