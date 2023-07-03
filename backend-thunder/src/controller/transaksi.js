
const Transaksi = require('../models/transaksi');

const getTransaksi = async () => {
  try {
    const transaksi = await Transaksi.findAll({
      attributes: ['nama_product', 'jenis_product', 'jumlah_produk', 'harga', 'total_harga', 'status'],
    });
    console.log(transaksi);
  } catch (error) {
    console.error(error);
  }
};



module.exports = {
    getTransaksi
}