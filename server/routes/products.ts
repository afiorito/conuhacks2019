import express from 'express';
import multer from 'multer';
import { Product } from '../db/models/Product';

export const products = express.Router();

const upload = multer();

products.get('/', async (req, res) => {
    res.json(await Product.find({}));
});

products.get('/interesting', async (req, res) => {
    res.json(await Product.aggregate([{ $sample: { size: 10 } }]));
});

products.post('/search/image', upload.array('file'), async (req, res) => {
    const file = Object.values(req.files)[0];
    const keywords = await generateKeywords(file.buffer);

    let category = null;
    const products = await Product.find({ attributes: {$in: keywords.map((k: string) => k.toLowerCase())} });

    if (products.length > 0 ) {
        category = (products[0] as any).category;
    }

    res.json({ category, products });
});

async function generateKeywords(buffer: Buffer) {
    const vision = require('@google-cloud/vision');

    // Convert the image data to a Buffer and base64 encode it.
    const encoded = Buffer.from(buffer).toString('base64');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    const [result] = await client.labelDetection({image: { content: encoded }});
    const labels = result.labelAnnotations;

    return labels.map((l: any) => l.description);
}
