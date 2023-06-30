const productModels = require('../models/product');
const Product = require('../models/product');
const path = require('path');
const fs = require('fs');

const getAllProduct = async (req, res) => {
    try {
        const [data] = await productModels.getAllProduct();

        res.json({
            message: 'Get ALL product succes',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server ERROR',
            serverMessage: error,
        })

    }


}



module.exports = {
    getAllProduct,
    async saveProduct(req, res) {
        if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
        const nama_product = req.body.nama;
        const jenis_product = req.body.jenis;
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
                await Product.create({nama: nama_product, jenis: jenis_product, harga:harga, stok:stok, foto: fileName, url: url});
                res.status(201).json({msg: "Product Created Successfuly"});
            } catch (error) {
                console.log(error.message);
            }
        })
    
    }
}