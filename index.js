const express = require('express');
const productRouters = require('./data/product');
const app = express();


app.use("/product",(req,res,next) =>{
    res.send('data product');
});

app.use('./product',productRouters);

app.get('/product', (req, res) => {})
    

app.post("/",(req,res)=>{
    res.send('POST data product dan karyawan');
});


app.listen(3000,() => {
    console.log('server berhasil di running di 3000')
});