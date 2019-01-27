import express from 'express';
import multer from 'multer';

const products = express.Router();

const upload = multer();

products.get('/', (req, res) => {
    res.json([]);
});

products.post('/search/image', upload.array('file'), (req, res) => {
    console.log(req);
});

export { products };
