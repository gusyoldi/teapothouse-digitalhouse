const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const newFilename = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
    },
});

let fileUpload = multer({ storage });

module.exports = fileUpload;
