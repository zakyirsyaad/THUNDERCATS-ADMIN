const express = require('express');

const router = express.Router();
const pesanController = require('../controller/pesan.js')
//IKI GET
router.get('/pesan', pesanController.getAllPesan);
//IKI POST
router.post('/pesan', pesanController.createNewPesan);




module.exports = router;