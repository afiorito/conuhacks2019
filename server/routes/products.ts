import express from 'express';
import multer from 'multer';

const products = express.Router();

const upload = multer();

products.get('/', (req, res) => {
    res.json([]);
});

products.post('/search/image', upload.array('file'), (req, res) => {
    const file = Object.values(req.files)[0];
    console.log(file.buffer);
    quickstart(file.buffer);
    //console.log(file);
});

export { products };

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
