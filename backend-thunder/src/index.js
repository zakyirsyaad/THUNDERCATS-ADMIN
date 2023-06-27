const express = require('express');


const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const middlewareLogRequest = require('./middleware/log');
const upload = require('./middleware/multer');
const app = express();


app.use(middlewareLogRequest);
app.use(express.json());

app.use('/user', userRoutes);
app.use('/product', productRoutes);

app.use(express.static('public/image'));
app.use('/', (req, res) => {
    res.send("Selamat datang di BACKEND THUNDERCATS")
})

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload BERHASIL'
    })
})

app.listen(3001, function () {
    console.log("server berhasil running");
})