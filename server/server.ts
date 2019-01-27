import * as bodyParser from 'body-parser';
import express from 'express';
import dbInit from './db';
import { initCategories } from './db/models/Category';
import { initProducts, Product } from  './db/models/Product';
import { categories } from './routes/categories';
import { products } from './routes/products';

const app = express();
const port = process.env.PORT || 5000;

dbInit().then(() => {
    return Promise.all([
        initCategories(),
        initProducts()
    ]);
})
.catch((err) => {
    console.log(err);
});

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.use('/api/products', products);
app.use('/api/categories', categories);

process.env.GOOGLE_APPLICATION_CREDENTIALS='/Users/Anthony/Programming/green-beans/Keys/greenbeans-e18a1a92026f.json';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
});
