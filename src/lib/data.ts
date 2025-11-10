export type Product = {
  id: string;
  name: string;
  seller: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  imageHint: string;
};

export const products: Product[] = [
  {
    id: 'prod_1',
    name: 'Handwoven Silk Saree',
    seller: 'Kovai Weavers',
    rating: 4.8,
    reviews: 120,
    price: 4500,
    originalPrice: 6000,
    category: 'Apparel',
    image: 'https://picsum.photos/seed/saree/400/400',
    imageHint: 'silk saree'
  },
  {
    id: 'prod_2',
    name: 'Artisan Coffee Powder',
    seller: 'Nilgiri Flavors',
    rating: 4.9,
    reviews: 350,
    price: 550,
    category: 'Groceries',
    image: 'https://picsum.photos/seed/coffee/400/400',
    imageHint: 'coffee powder'
  },
  {
    id: 'prod_3',
    name: 'Cast Iron Kadai',
    seller: 'Coimbatore Foundry',
    rating: 4.7,
    reviews: 215,
    price: 1200,
    category: 'Home & Kitchen',
    image: 'https://picsum.photos/seed/kadai/400/400',
    imageHint: 'cast iron'
  },
  {
    id: 'prod_4',
    name: 'Herbal Hair Oil',
    seller: 'Velliangiri Herbals',
    rating: 4.6,
    reviews: 180,
    price: 800,
    originalPrice: 950,
    category: 'Beauty & Wellness',
    image: 'https://picsum.photos/seed/hairoil/400/400',
    imageHint: 'herbal oil'
  },
  {
    id: 'prod_5',
    name: 'Organic Turmeric Powder',
    seller: 'Erode Organics',
    rating: 4.9,
    reviews: 450,
    price: 300,
    category: 'Groceries',
    image: 'https://picsum.photos/seed/turmeric/400/400',
    imageHint: 'turmeric powder'
  },
  {
    id: 'prod_6',
    name: 'Handmade Clay Pot',
    seller: 'Siruvani Potters',
    rating: 4.5,
    reviews: 95,
    price: 750,
    category: 'Home & Kitchen',
    image: 'https://picsum.photos/seed/claypot/400/400',
    imageHint: 'clay pot'
  },
  {
    id: 'prod_7',
    name: 'Cotton Kurti',
    seller: 'Tiruppur Textiles',
    rating: 4.4,
    reviews: 150,
    price: 1100,
    originalPrice: 1500,
    category: 'Apparel',
    image: 'https://picsum.photos/seed/kurti/400/400',
    imageHint: 'cotton kurti'
  },
  {
    id: 'prod_8',
    name: 'Cold Pressed Coconut Oil',
    seller: 'Pollachi Farms',
    rating: 4.8,
    reviews: 280,
    price: 450,
    category: 'Groceries',
    image: 'https://picsum.photos/seed/coconutoil/400/400',
    imageHint: 'coconut oil'
  },
];
