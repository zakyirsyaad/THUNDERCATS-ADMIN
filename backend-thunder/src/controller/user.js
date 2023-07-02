const userModels = require('../models/user');

const getAllUser = async (req, res) => {
  try {
    const users = await userModels.User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createNewUser = async (req, res) => {
    const nama = req.body.nama;
    const negara = req.body.negara;
    const kota = req.body.kota;
    const kecamatan = req.body.kecamatan;
    const alamat = req.body.alamat;
    const kodepos = req.body.kodepos;
    const no_telp = req.body.no_telp;
    const email = req.body.email;

  try {
    const newUser = await userModels.User.create({ 
        nama: nama,
        negara: negara,
        kota: kota,
        kecamatan: kecamatan,
        alamat: alamat,
        kodepos: kodepos,
        no_telp: no_telp,
        email: email, });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await userModels.User.destroy({
      where: {
        id: id,
      },
    });

    if (deletedUser === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const {
      nama,
      negara,
      kota,
      kecamatan,
      alamat,
      kodepos,
      no_telp,
      email
    } = req.body;
  
    try {
      const updatedUser = await userModels.User.update(
        {
          nama,
          negara,
          kota,
          kecamatan,
          alamat,
          kodepos,
          no_telp,
          email
        },
        {
          where: {
            id: userId
          }
        }
      );
  
      if (updatedUser[0] === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

const loginUser = async (email, password) => {
    try {
      const user = await userModels.User.findOne({
        where: {
          email,
          password
        }
      });
      return user;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  getAllUser,
  createNewUser,
  deleteUser,
  updateUser,
  loginUser
};
