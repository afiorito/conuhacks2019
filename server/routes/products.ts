import express from 'express';
import multer from 'multer';

const products = express.Router();

const upload = multer();

async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.webDetection('C:/Users/Marial Grace/Desktop/pics/knife.jpg');
    const webDetection = result.webDetection;
  
    if (webDetection.webEntities.length) {
      console.log(`Web entities found: ${webDetection.webEntities.length}`);
      webDetection.webEntities.forEach((webEntity:any) => {
        console.log(`  Description: ${webEntity.description}`);
        console.log(`  Score: ${webEntity.score}`);
      });
     }
    return webDetection;
  }
  
  (async function() {
      const result = await quickstart();
  
      console.log(result);
  })();

products.get('/', (req, res) => {
    res.json([]);
});

products.post('/search/image', upload.array('file'), (req, res) => {
    console.log(req);
});

export { products };
