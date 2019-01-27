import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {type: String, unique: true}
});

export const initCategories = async () => {
    return Category.create([
        { name: 'Bottles' },
        { name: 'Utensils' },
        { name: 'Soaps' },
        { name: 'Detergents' },
        { name: 'Lighting' },
        { name: 'Bags' }
    ]);
}

export const Category = mongoose.model('Category', CategorySchema);
