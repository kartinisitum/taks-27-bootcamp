const express = require('express');
const router = express.Router();

router.get('/heroes', (req, res) => {
 res.send(200, [
    {"id": 1034567777, "name": "pisang", "stok": "100","harga": '2300',"tipe":"makanan"},
    {"id": 1034567777, "name": "indomie", "stok": "130","harga": '3000',"tipe":"makanan"},
    {"id": 10329077703, "name": "cha time", "stok": "50","harga": '15000',"tipe":"minuman"},
    {"id": 1034567097, "name": "pisang", "stok": "100","harga": '2300',"tipe":"makanan"},
    {"id": 1034567456, "name": "bango", "stok": "100","harga": '2300',"tipe":"makanan"},
 ])
});

module.exports=router;