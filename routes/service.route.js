const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');

const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => {
        let fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        req.body.image = fileName;
        cb(null, fileName);
    }
});
const upload = multer({ storage: myStorage });

router.post('/create', upload.single('image'), serviceController.createService);
router.get('/', serviceController.getServicess);
router.get('/my/:id', serviceController.getMyService);
router.get('/:id', serviceController.getServicesById);
router.delete('/:id', serviceController.deleteService);


module.exports = router;