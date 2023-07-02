const express = require('express');

const router = express.Router();
const pesanController = require('../controller/pesan.js')
// GET
router.get('/', pesanController.getAllpesan);
// POST
router.post('/', pesanController.createNewpesan);

module.exports = router;