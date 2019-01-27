import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    category: String,
    attributes: [String],
    customerRating: Number,
    customerRatingImage: String,
    image: String,
    name: String,
    price: Number,
    productId: {type: Number, unique: true },
    shortDescription: String,
    url: String,
});

export const productWithAttributes = (attributes: [string]) => {

}

export const initProducts = async () => {
    return Product.create([
        {
            category: 'Utensils',
            attributes: ['utensil', 'cutlery', 'tableware', 'kitchen utensil'], 
            customerRating: 5.0,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/5.gif',
            image: 'https://i5.walmartimages.com/asr/9e57414d-89b1-467f-8796-cff2a8cd01f6_1.e1f69edc563fdc1dbe72c9dae32e7174.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            name: 'To-Go Ware Eco-Friendly Reusable Bamboo Kids Spoons and Forks- Set of 6',
            price: 11.99,
            productId: 482592454,
            shortDescription: 'To-Go Ware Eco-Friendly Reusable Bamboo Kids Spoons and Forks- Set of 6.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FTo-Go-Ware-Eco-Friendly-Reusable-Bamboo-Kids-Spoons-and-Forks-Set-of-6%2F482592454%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi',
        },
        {
            category: 'Utensils',
            attributes: ['utensil', 'cutlery', 'tableware', 'kitchen utensil'],
            customerRating: 4.75,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/4_8.gif',
            image: 'https://i5.walmartimages.com/asr/a1ddd25b-af22-4eea-96cb-8435630160a1_3.bff0713898feaceacb95d3ed3f46f16c.png?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            name: 'Ayesha Curry Eco Friendly Parawood Cooking Tool Set, 4-Piece',
            price: 22.48,
            productId: 56092797,
            shortDescription: 'Constructed from eco-friendly parawood, the tools are finished with food-grade, matte mineral oil to highlight the distinctive, beautiful wood grain. Mix up the ingredients for Ayeshas Citrus-Olive Oil cake or simmer down some brown sugar, soy sauce and ginger for Oven Roasted Brown Sugar Chicken with these indespensible kitchen tools designed for long-lasting comfort and durability, recipe after recipe.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FAyesha-Curry-Eco-Friendly-Parawood-Cooking-Tool-Set-4-Piece%2F56092797%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi',
        },
        {
            category: 'Utensils',
            attributes: ['utensil', 'cutlery', 'tableware', 'kitchen utensil'],
            customerRating: 0,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/0.gif',
            image: 'https://i5.walmartimages.com/asr/c45cabdb-2554-40c1-b00f-796ae6706b04_1.756634e0b16b3fc75ce66a3a7e24cfd9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            name: 'BalsaCircle 100 pcs 6\" Disposable Natural Birch Wooden Forks - Eco Friendly Biodegradable Compostable Wedding Party Tableware',
            price: 4.31,
            productId: 887578362,
            shortDescription: 'Complete your tablescape with an attention to every little detail, including the place setting. Your guests will be so pleasantly surprised to find you have taken even this small consideration on their behalf! What you get:Each order is for one hundred (100) forks. Each fork measures 6in; long x 1in; wide.Material: 100% Compostable Birch Wood.No glazes, bleaches, or dyes.This purchase is for disposable forks only, other decorations are not included.PLEASE NOTE: This item is not returnable to Walmart.com or Walmart stores.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FBalsaCircle-100-pcs-6-Disposable-Natural-Birch-Wooden-Forks-Eco-Friendly-Biodegradable-Compostable-Wedding-Party-Tableware%2F887578362%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi'
        },
        {
            category: 'Utensils',
            attributes: ['utensil', 'cutlery', 'tableware', 'kitchen utensil'],
            customerRating: 0,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/0.gif',
            image: 'https://i5.walmartimages.com/asr/911f6d2b-3cef-4f7c-8791-a777d3140120_1.cdaebe5bb7a49988847408c63ff4e597.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            name: 'Eco-Products 7\" Plant Starch Forks, Natural White, 1000 / Carton (Quantity)',
            price: 56.58,
            productId: 14982968,
            shortDescription: 'Cutlery is made of plant starch material, a renewable resource, and offers strength and heat tolerance. Ideal for hot foods and liquids. Heat tolerance is up to 200 degrees Fahrenheit. Reinforced handles provide extra strength. Cutlery is not recommended for microwaves and is not compostable.Eco-Products 7&quot; Plant Starch Forks, Natural White, 1000 / Carton (Quantity)',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FEco-Products-7-Plant-Starch-Forks-Natural-White-1000-Carton-Quantity%2F14982968%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi'
        },
        {
            category: 'Utensils',
            attributes: ['utensil', 'cutlery', 'tableware', 'kitchen utensil'],
            customerRating: 0,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/0.gif',
            image: 'https://i5.walmartimages.com/asr/316c80f6-564e-41ea-b8af-8df5c9a8fccb_1.1d7365df25fa10d0c29935345c39841c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            name: 'Brheez Disposable Cornstarch Forks - Eco Friendly Alternative to Plastic - Plant Based Cornstarch - Biodegradable Compostable - Heavy Weight - 7\" Ivory (Pack of 250)',
            price: 26.99,
            productId: 219643455,
            shortDescription: 'Brheez Disposable Cornstarch Forks - Eco Friendly Alternative to Plastic - Plant Based Cornstarch - Biodegradable Compostable - Heavy Weight - 7&quot; Ivory (Pack of 250)',
            url: 'http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2F219643455%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi'
        },

        {
            category: 'Clothing',
            attributes: ['outerwear', 'clothes', 'sleeve'],
            customerRating: 0,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/0.gif',
            image: 'https://i5.walmartimages.com/asr/74674ff5-745b-46dc-8421-11042ca93ba6_1.9f86c8af50de0b403be6e7b6e2c352aa.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            name: 'Champion Men\'s Double Dry Eco Fleece Crew',
            price: 20,
            productId: 141956605,
            shortDescription: '1x1 rib with spandex, Set-in armholes, Double-needle stitching.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FChampion-Men-s-Double-Dry-Eco-Fleece-Crew%2F141956605%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi',
        },
        {
            category: 'Clothing',
            attributes: ['outerwear', 'clothes', 'sleeve'],
            customerRating: 0,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/0.gif',
            image: 'https://i5.walmartimages.com/asr/8248200f-c832-4527-bd83-217845fdbfc6_1.6692faca9a01cec674f06306bf55fe2a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            name: 'Ladies Thin Blue Line Flag Vertical Back Print Alternative Apparel Eco Fleece Full Zipper Hooded Sweatshirt - Small',
            price: 69.99,
            productId: 344328227,
            shortDescription: 'Ladies Thin Blue Line Flag Vertical Back Print Alternative Apparel Eco Fleece Full Zipper Hooded Sweatshirt - Small',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FLadies-Thin-Blue-Line-Flag-Vertical-Back-Print-Alternative-Apparel-Eco-Fleece-Full-Zipper-Hooded-Sweatshirt-Small%2F344328227%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi',
        },
    ]);
};

export const Product = mongoose.model('Product', ProductSchema);

export interface IProduct {
    category: string;
    attributes: [string];
    customerRating: number;
    customerRatingImage: string;
    image: string;
    name: string;
    price: number;
    productId: number;
    shortDescription: string;
    url: string;
}
