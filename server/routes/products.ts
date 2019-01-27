import express from 'express';
import multer from 'multer';
import { Product } from '../db/models/Product';

export const products = express.Router();

const upload = multer();

products.get('/', async (req, res) => {
    res.json(await Product.find({ category: {$in: ['Utensils']} }));
});

products.get('/interesting', async (req, res) => {
    res.json(await Product.aggregate([{ $sample: { size: 10 } }]));
});

products.post('/search/image', upload.array('file'), (req, res) => {
    console.log(req);
});
