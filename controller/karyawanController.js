const express = require('express');
const dataKaryawan = require('./data/karyawan.js')
const router = express.router();

router.get('/', dataKaryawan.getAllKaryawan);

router.post('./',dataKaryawan.createNewKaryawan)

module.exports = router;