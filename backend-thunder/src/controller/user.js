const userModels = require('../models/user');

const getAlluser = async (req, res) => {
    try {
        const [data] = await userModels.getAlluser();

        res.json({
            message: 'Get ALL user succes',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server ERROR',
            serverMessage: error,
        })

    }


}

const createNewuser = async (req, res) => {
    const { body } = req;
    try {
        await userModels.createNewuser(body);
        res.json({
            message: 'CREATE New user success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server ERROR',
            serverMessage: error,
        });
    }
}

const updateUser = (req, res) => {
    const { idUser } = req.params;
    console.log('idUser:', idUser);
    res.json({
        message: 'UPDATE berhasil',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const { idUser } = req.params;
    res.json({
        message: 'DELETE berhasil',
        data: {
            id: idUser,
            username: "solikin",
            password: "javier1234"
        }
    })

}

const loginUser = (req, res) => {
    const { username, password } = req.body;

    userModels.loginUser(username, password)
        .then((result) => {
            if (result) {
                res.send('Login berhasil');
            } else {
                res.status(401).send('Login gagal');
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Terjadi kesalahan server');
        });

}
module.exports = {
    getAlluser,
    createNewuser,
    updateUser,
    deleteUser,
    loginUser
}