const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../public/image');
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const fileName = file.filename;
        const extension = path.extname(file.originalname);

        cb(null, `${timestamp}-${fileName}${extension}`);
    }
});

const upload = multer({storage: storage});

module.exports = upload;