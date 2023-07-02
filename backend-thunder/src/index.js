const express = require('express');

const adminRoutes = require('./routes/admin');
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

app.use(pesanRoutes);
app.use(userRoutes);
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
