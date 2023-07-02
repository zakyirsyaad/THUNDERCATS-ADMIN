const Admin = require('../models/admin');
const loginAdmin = async (email, password) => {
    try {
      const admin = await Admin.findOne({
        where: {
          email,
          password
        }
      });
      return admin;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = { loginAdmin };