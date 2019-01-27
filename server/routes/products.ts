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
    const file = Object.values(req.files)[0];
    console.log(file.buffer);
    quickstart(file.buffer);
    //console.log(file);
});

async function quickstart(temp:any) {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Convert the image data to a Buffer and base64 encode it.
    var encoded = Buffer.from(temp).toString('base64');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    const [result] = await client.labelDetection({image: { content: encoded}});
    const labels = result.labelAnnotations;

    var words=[]; 
  
    // labels.forEach((label:any) => console.log(label.description));
    var i;
    for (i = 0; i < labels.length; i++)
        words[i] = labels[i].description;
    console.log(words);
}
