const transaksiModels = require('../models/transaksi.js');
const getAlltransaksi = async (req, res) => {
    try {
        const [data] = await transaksiModels.getAlltransaksi();

        res.json({
            message: 'Get ALL transaksi succes',
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
    getAlltransaksi
}