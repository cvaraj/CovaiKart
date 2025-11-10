'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProductCard } from '@/components/product-card';
import { Skeleton } from '@/components/ui/skeleton';
import { getRecommendedProducts } from '@/ai/actions';
import type { Product } from '@/lib/data';

interface ProductCarouselProps {
  allProducts: Product[];
}

export function ProductCarousel({ allProducts }: ProductCarouselProps) {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      const { recommendedProducts: recommendedIds } = await getRecommendedProducts();
      
      const filteredProducts = allProducts.filter(p => recommendedIds.includes(p.id));
      
      // If AI returns nothing, show some other products as a fallback
      if (filteredProducts.length > 0) {
        setRecommendedProducts(filteredProducts);
      } else {
        setRecommendedProducts(allProducts.slice(4, 9));
      }

      setIsLoading(false);
    }
    fetchRecommendations();
  }, [allProducts]);

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
  }

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {recommendedProducts.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-1 h-full">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex"/>
    </Carousel>
  );
}
