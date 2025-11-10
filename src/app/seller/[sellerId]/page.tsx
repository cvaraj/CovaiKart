'use client';

import { products, type Product } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SellerHeader } from '@/components/seller-header';
import { ProductCard } from '@/components/product-card';
import { SellerReviewCard, type SellerReview } from '@/components/seller-review-card';


export default function SellerStorefrontPage({ params }: { params: { sellerId: string } }) {
  const { sellerId } = params;

  // Find the seller name from the first product that matches. In a real app, this would be a separate query.
  const sellerProduct = products.find(p => p.seller.toLowerCase().replace(/\s/g, '-') === sellerId);
  
  if (!sellerProduct) {
    notFound();
  }
  
  const seller = {
    name: sellerProduct.seller,
    id: sellerId,
    avatar: 'https://picsum.photos/seed/seller-avatar/100/100',
    bio: 'Specializing in authentic, handwoven textiles from the heart of Coimbatore. We have been preserving traditional weaving techniques for over three generations, bringing you timeless pieces of art.',
    rating: 4.8,
    reviewsCount: 120,
    productsCount: products.filter(p => p.seller === sellerProduct.seller).length,
    location: 'Coimbatore, Tamil Nadu',
    turnaroundTime: '2-3 business days',
    memberSince: 2021,
    policies: {
        shipping: "We ship all orders within 2-3 business days. Standard shipping takes 5-7 business days. Expedited options are available at checkout.",
        returns: "We accept returns within 30 days of delivery. The item must be in its original condition. Please contact us to initiate a return. A restocking fee may apply."
    }
  };

  const sellerProducts = products.filter(p => p.seller === seller.name);

  const reviews: SellerReview[] = [
    {
      id: 'rev1',
      author: 'Ananya S.',
      rating: 5,
      date: '2 weeks ago',
      comment: 'The silk saree I purchased is absolutely stunning! The quality is exceptional and the colors are so vibrant. The delivery was also very fast. Highly recommend this seller!',
      product: products.find(p => p.id === 'prod_1')
    },
    {
      id: 'rev2',
      author: 'Vikram R.',
      rating: 4,
      date: '1 month ago',
      comment: 'Good quality cotton kurti. The fabric is soft and comfortable. There was a slight delay in shipping, but the seller was communicative. Overall, a positive experience.',
      product: products.find(p => p.id === 'prod_7')
    },
     {
      id: 'rev3',
      author: 'Priya K.',
      rating: 5,
      date: '3 months ago',
      comment: 'I love the handwoven texture and the design is unique. I always get compliments when I wear it. Will definitely buy from this seller again.',
      product: products.find(p => p.id === 'prod_1')
    },
  ];

  return (
    <div className="container py-12 md:py-16">
       <Breadcrumb className="mb-8">
            <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>{seller.name}</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
      
        <SellerHeader seller={seller} />
      
        <Tabs defaultValue="catalog" className="mt-12">
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                <TabsTrigger value="catalog">Product Catalog</TabsTrigger>
                <TabsTrigger value="reviews">Ratings & Reviews</TabsTrigger>
                <TabsTrigger value="policies">Store Policies</TabsTrigger>
            </TabsList>
            <TabsContent value="catalog" className="mt-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {sellerProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                    {reviews.map(review => (
                        <SellerReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="policies" className="mt-6">
                 <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl">
                    <h3 className="text-lg font-semibold mb-4">Shipping Policy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{seller.policies.shipping}</p>
                    <h3 className="text-lg font-semibold mt-6 mb-4">Return & Refund Policy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{seller.policies.returns}</p>
                 </div>
            </TabsContent>
        </Tabs>
    </div>
  );
}
