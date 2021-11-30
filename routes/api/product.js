const ProductController = require('../../controller/ProductController')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
});

const multerFilter = (req, file, cb) => {

    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    }
    else {
        cb("Not an image! Please upload only images.", false);
    }
};



var upload = multer({
    storage: storage,
    limits: { fileSize: 1000000000 },
    fileFilter: multerFilter
});



router.post('/data', upload.array('photos', 12), ProductController.imageuploading);
router.get('/data/:id',ProductController.imageretrivebyid);
router.get('/data',ProductController.showalldata);
router.get('/home', ProductController.home)

module.exports = router;
