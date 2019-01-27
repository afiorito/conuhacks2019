import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    category: String,
    customerRating: Number,
    customerRatingImage: String,
    image: String,
    name: String,
    price: Number,
    productId: {type: Number, unique: true },
    shortDescription: String,
    url: String,
});

export const initProducts = async () => {
    return Product.create([
        {
            category: 'Utensils',
            customerRating: 4.328,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/4_3.gif',
            image: 'https://i5.walmartimages.com/asr/ebd761b2-da5b-4dfd-9a38-909c02591695_1.d4810a100899004b9aafcf2356e146b5.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
            name: 'Mainstays 20-Piece Colonial Flatware Set',
            price: 9.97,
            productId: 24335919,
            shortDescription: 'Set your table with the Mainstays Colonial 20-Piece Flatware Set. The pieces are made of quality stainless steel and feature a classic design that looks great in virtually any setting. This 20-piece stainless steel flatware set comes with service for four, including four dinner forks, four salad forks, four dinner knives, four dinner spoons and four teaspoons. These utensils are dishwasher safe for easy cleaning and designed for long-lasting everyday use. The Mainstays Colonial 20-Piece Flatware Set makes a wonderful housewarming gift or supplement for your existing silverware.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FMainstays-20-Piece-Colonial-Flatware-Set%2F24335919%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi',
        },
        {
            category: 'Utensils',
            customerRating: 4.302,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/4_3.gif',
            image: 'https://i5.walmartimages.com/asr/6b544b90-f161-403f-89c8-6261e381e6ec_1.90db0a870b70301433ae02d6076db6be.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
            name: 'Cambridge Silversmiths Boa Frost 20-Piece Flatware Set',
            price: 32.51,
            productId: 13275640,
            shortDescription: 'Add a refined look to your table with the Cambridge Silversmiths Boa Frost 20-Piece Flatware Set. It includes everything you need for service for four, including dinner forks, dinner knives, dinner spoons, soup spoons and teaspoons. Items like this set make excellent house-warming gifts or an easy way to update your own kitchen. Combine sets for larger groups. It has everything you need to serve multiple courses with the correct utensil. Made from stainless steel, this Cambridge Silversmiths flatware set is durable and dishwasher-safe to make cleanup easier. It resists rust, spots and stains and features a lovely high polish finish. The two-tone Boa Frost design is distinctive and pairs nicely with other tableware. A geometric flourish adorns the handle of each piece. It\'s appropriate for daily use at breakfast, lunch and dinner, in addition to special occasion meals.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FCambridge-Silversmiths-Boa-Frost-20-Piece-Flatware-Set%2F13275640%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi',
        },
        {
            category: 'Utensils',
            customerRating: 4.667,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/4_7.gif',
            image: 'https://i5.walmartimages.com/asr/3ee7ac9b-1753-4098-aa83-6d9a717bb5e7_1.7292504d8182e3117d0b16dea850bc69.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
            name: 'Royal 20-Piece Silverware Set 18/10 Stainless Steel Utensils Forks Spoons Knives Set, Mirror Polished Cutlery Flatware Set - Curved Design',
            price: 19.99,
            productId: 966856385,
            shortDescription: 'SERVICE FOR 5: Comes with 5 Dinner Forks, 5 Tablespoons, 5 Knives, and 5 Teaspoons. Great for get-togethers, family dinners, formal or informal meals; Stylish flatware allows you to dine in style with friends and family; Modern style pairs well with your other flatwareSUPERIOR QUALITY:Professional grade 18/10 stainless steel flatware set is rust &amp; corrosion resistant, ensuring you will use it for years to come; Weighted for comfortable ergonomic fit, won&rsquo;t bend or warp; Heat resistant and dishwasher safe.DURABLE AND EASY TO USE: Silverware is dishwasher safe, won&rsquo;t lose its shine, and won&rsquo;t spot, rust, discolor, or pit; perfect for everyday use; Smoothly finished, no sharp edges; Safe and comfortable for both adults and childrenELEGANT DESIGN: Elegant, ergonomic modern wave design has clean stylish look that suits a casual meal as well as a fancy dinner; High shine mirror polished finish adds a sense of class and sparkle to your table and makes your meal just a bit more special; Retains high shine finish and will not fade over timePERFECT FOR GIFT GIVING: Makes a wonderful gift for weddings, showers, housewarmings and more; Utensils are individually wrapped in plastic sleeves to prevent scratching, and packaged in a sleek black gift box',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FRoyal-20-Piece-Silverware-Set-18-10-Stainless-Steel-Utensils-Forks-Spoons-Knives-Set-Mirror-Polished-Cutlery-Flatware-Set-Curved-Design%2F966856385%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi'
        },
        {
            category: 'Utensils',
            customerRating: 3.808,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/3_8.gif',
            image: 'https://i5.walmartimages.com/asr/807e64d8-f6ce-4386-871c-6bd8527a8f57_1.627e30943b7cddd7a621b74a7e00b8a0.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
            name: 'Gibson Home Sensations II 16-Piece Flatware Set with Wire Caddy',
            price: 9.97,
            productId: 35274669,
            shortDescription: 'Simplify mealtime and cleanup with the Gibson Home Sensations II 16-Piece Flatware Set. This set is complete with a durable and easy-to-clean wire caddy, freeing up drawer space.',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FGibson-Home-Sensations-II-16-Piece-Flatware-Set-with-Wire-Caddy%2F35274669%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi'
        },
        {
            category: 'Utensils',
            customerRating: 4.711,
            customerRatingImage: 'http://i2.walmartimages.com/i/CustRating/4_7.gif',
            image: 'https://i5.walmartimages.com/asr/01e222d1-5d29-4c4f-aa5e-58c6caa0b16d_1.7292504d8182e3117d0b16dea850bc69.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
            name: 'Best Choice Products 39-Piece Home Kitchen All-Purpose Stainless Steel and Nylon Cooking Baking Tool Gadget Utensil Set for Scratch-Free Dishes - Black/Silver',
            price: 75.99,
            productId: 274828633,
            shortDescription: 'Give yourself a new incentive to get in the kitchen and prepare a home-cooked meal. Complete with spatulas, can and bottle openers, and so much more, this durable 39-piece kitchen utensil set is there to assist in creating any dish! Its nylon and stainless-steel design also keeps dishes free of scratches during use. It\'s time to start taking cooking and baking a little more seriously.FEATURES: 39-piece cooking set has everything needed to cook and bake a plethora of dishesComplete with a peeler, bottle opener, 5 measuring cups, and so much moreMade of high-quality nylon and stainless-steel to ensure durability through the yearsSet provides adequate cutting, pressing, mixing, and more, without scratching dishesDIMENSIONS: Package Dimensions: 8&quot;(L) x 6&quot;(W) x 13.25&quot;(H)Skimmer: 12.5&quot;(L)Large Chef Slotted Turner: 11.5&quot;(L)Slotted Turner: 12.5&quot;(L)Sauce Ladle: 10&quot;(L)Ladle: 12&quot;(L)Oval Turner: 12.5&quot;(L)Basting Spoon: 12&quot;(L)Slotted Spoon: 12&quot;(L)Chef Slotted Turner: 12.5&quot;(L)Weight: 4.2 lbs.SPECIFICATIONS: Color: BlackMaterial: Nylon, Stainless SteelIncludes: Basting spoon, Slotted spoon, Spaghetti server, Ladle, Skimmer, Sauce ladle, Whisk, Potato masher, Icing knife, Fork, Meat fork, Large chef slotted turner, Small chef slotted turner, Slotted turner, Oval turner, Turner, Cooking tongs, Pizza cutter, Bottle opener, Cheese grater, Garlic press, Can opener, Peeler, Kitchen scissors, Ice cream scoop, Pie server, (3) Scrapers, (5) Measuring cups, (5) Measuring spoonsAssembly required (with instructions)BCP SKU: SKY4058',
            url: 'http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FBest-Choice-Products-39-Piece-Home-Kitchen-All-Purpose-Stainless-Steel-Nylon-Cooking-Baking-Tool-Gadget-Utensil-Set-Scratch-Free-Dishes-Black-Silver%2F274828633%3Faffp1%3DdjctSY0-vbCq6EFpleNL-_3vVVetoFFfMyPYp5WGbEA%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi'
        }
    ]);
};

export const Product = mongoose.model('Product', ProductSchema);

export interface IProduct {
    category: string;
    customerRating: number;
    customerRatingImage: string;
    image: string;
    name: string;
    price: number;
    productId: number;
    shortDescription: string;
    url: string;
}
