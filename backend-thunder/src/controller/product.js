const productModels = require('../models/product');
// const Product = require('../models/product');
const path = require('path');
const fs = require('fs');

const getProduct = async(req, res)=>{
    try {
        const response = await productModels.Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const getProductById = async(req, res)=>{
    try {
        const response = await productModels.Product.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const saveProduct = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const nama_product = req.body.nama_product;
    const jenis_product = req.body.jenis_product;
    const harga = req.body.harga;
    const stok = req.body.stok;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/image/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await productModels.Product.create({nama_product: nama_product, jenis_product:jenis_product, harga:harga, stok:stok, foto: fileName, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

// const updateProduct = async(req, res)=>{
//     const product = await productModels.Product.findOne({
//         where:{
//             id : req.params.id
//         }
//     });
//     if(!product) return res.status(404).json({msg: "No Data Found"});
    
//     let fileName = "";
//     if(req.files === null){
//         fileName = product.foto;
//     }else{
//         const file = req.files.file;
//         const fileSize = file.data.length;
//         const ext = path.extname(file.nama_product);
//         fileName = file.md5 + ext;
//         const allowedType = ['.png','.jpg','.jpeg'];

//         if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
//         if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

//         const filepath = `./public/image/${product.foto}`;
//         fs.unlinkSync(filepath);

//         file.mv(`./public/image/${fileName}`, (err)=>{
//             if(err) return res.status(500).json({msg: err.message});
//         });
//     }
//     const nama_product = req.body.nama_product;
//     const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
    
//     try {
//         await productModels.Product.update({nama_product: nama_product, jenis_product:jenis_product, harga:harga, stok:stok, foto: fileName, url: url},{
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Product Updated Successfuly"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const deleteProduct = async(req, res)=>{
//     const product = await productModels.Product.findOne({
//         where:{
//             id : req.params.id
//         }
//     });
//     if(!product) return res.status(404).json({msg: "No Data Found"});

//     try {
//         const filepath = `./public/image/${product.image}`;
//         fs.unlinkSync(filepath);
//         await productModelsProduct.destroy({
//             where:{
//                 id : req.params.id
//             }
//         });
//         res.status(200).json({msg: "Product Deleted Successfuly"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }


module.exports = {
    getProduct,
    getProductById,
    saveProduct,
    // updateProduct,
    // deleteProduct
}