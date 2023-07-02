const express = require('express');
<<<<<<< HEAD
=======

const adminRoutes = require('./routes/admin');
>>>>>>> 499e8ad57939229adf829bdba21e7bc2ea0f56ef
const userRoutes = require('./routes/user');
const pesanRoutes = require('./routes/pesan');
const productRoutes = require('./routes/product');
const middlewareLogRequest = require('./middleware/log');
const FileUpload = require('express-fileupload');
const upload = require('./middleware/multer');
const app = express();

// Middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use(FileUpload());

<<<<<<< HEAD
// Pengaturan Header CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Mengizinkan semua domain (harap disesuaikan dengan kebutuhan Anda)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Mengizinkan metode HTTP yang diizinkan
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Mengizinkan header yang diizinkan
    next();
});

// Routes
app.use('/user', userRoutes);
=======
app.use('/pesan', pesanRoutes);
app.use(userRoutes);
>>>>>>> 499e8ad57939229adf829bdba21e7bc2ea0f56ef
app.use(productRoutes);
app.use(adminRoutes);

app.use(express.static('public'));

app.use(express.static('public/image'));

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload BERHASIL'
    })
})

app.listen(3001, () => {
    console.log("server berhasil running");
})
