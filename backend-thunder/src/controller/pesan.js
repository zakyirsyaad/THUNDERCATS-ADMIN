const pesanModels = require('../models/pesan');

const getAllPesan = async (req, res) => {
  try {
    const pesan = await pesanModels.Pesan.findAll();
    res.json(pesan);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createNewPesan = async (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const pesan = req.body.pesan;

  try {
    const newPesan = await pesanModels.Pesan.create({ 
        nama: nama,
        email: email,
        pesan: pesan });
    res.status(201).json(newPesan);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    getAllPesan,
    createNewPesan
  };