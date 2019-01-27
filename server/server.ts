import * as bodyParser from 'body-parser';
import express from 'express';
import { products } from './routes/products';

const app = express();
const port = 80;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(`Request Recieved`);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
