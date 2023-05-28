const getAllProduct = (req,res) =>{
    res.json({
        message : 'GET all data product'
    })
}
const createNewProduct = (req,res) =>{
    res.json({
        message : 'CREATE new product'
    })
}
module.exports ={
    getAllProduct,
    createNewProduct,
}