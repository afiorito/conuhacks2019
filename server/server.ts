import * as bodyParser from 'body-parser';
import express from 'express';
import { products } from './routes/products';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/products', products);

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);
});
