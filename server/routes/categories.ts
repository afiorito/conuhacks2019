import express from 'express';
import { Category } from '../db/models/Category';

const categories = express.Router();

categories.get('/', async (req, res) => {
    res.json(await Category.find({}));
});

export { categories };
