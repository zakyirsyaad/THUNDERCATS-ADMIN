const express = require('express');

const router = express.Router();
const userController = require('../controller/user.js')
//IKI GET
router.get('/user', userController.getAlluser);
// //IKI POST
// router.post('/', userController.createNewuser);
// //IKI UPDATE
// router.patch('/:idUser', userController.updateUser);
// //IKI DELETE
// router.delete('/:idUser', userController.deleteUser);
// //IKi LOGIN
// router.post('/login', userController.loginUser);




module.exports = router;