const pesanModels = require('../models/pesan');

const getAllpesan = async (req, res) => {
    try {
        const [data] = await pesanModels.getAllpesan();

        res.json({
            message: 'Get ALL pesan success',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server ERROR',
            serverMessage: error,
        })

    }


}

const createNewpesan = (req, res) => {
    const { body } = req;
    try {
        pesanModels.createNewpesan(body);
        res.json({
            message: 'CREATE New pesan success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server ERROR',
            serverMessage: error,
        })
    }


}

module.exports = {
    getAllpesan,
    createNewpesan
}