const express = require('express');
const router = express.Router();

router.get('/karyawan ', (req, res) => {
 res.send(200, [
    {'nama': 'goro', 'umur': '20', 'alamat ': 'sabulan','jenis kelamin': 'laki-laki'},
    {'nama': 'ninda', 'umur': '20', 'alamat ': 'ransang bosi','jenis kelamin': 'perempuan'},
    {'nama': 'rany ', 'umur': '27', 'alamat ': 'sabulan','jenis kelamin': 'perempuan '},
    {'nama': 'venisha', 'umur': '26', 'alamat ': 'sabulan','jenis kelamin': 'perempuan'},
    {'nama': 'iklas', 'umur': '28', 'alamat ': 'sabulan','jenis kelamin': 'perempuan'},
    {'nama': 'freddy', 'umur': '20', 'alamat ': 'sabulan','jenis kelamin': 'laki-laki'},
 ]) 
});

module.exports=router;