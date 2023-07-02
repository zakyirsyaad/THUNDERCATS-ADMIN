const express = require('express');

const router = express.Router();
const userController = require('../controller/user.js')
//IKI GET
router.get('/user', userController.getAllUser);
//IKI POST
router.post('/user', userController.createNewUser);
//IKI UPDATE
router.patch('/user/:id', userController.updateUser);
//IKI DELETE
router.delete('/user/:id', userController.deleteUser);
//IKi LOGIN
router.post('/login', userController.loginUser);




module.exports = router;