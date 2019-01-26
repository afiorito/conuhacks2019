import express from 'express';

const products = express.Router();

products.get('/', (req, res) => {
    res.json([]);
});

export { products };
