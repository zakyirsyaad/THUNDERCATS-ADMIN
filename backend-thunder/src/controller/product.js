const productModels = require('../models/product');

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
    getAllProduct
}