
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBasket } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block h-full">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col bg-white rounded-2xl">
        <CardContent className="p-0 flex flex-col flex-grow">
          <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-t-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.imageHint}
            />
            {product.originalPrice && (
              <Badge variant="default" className="absolute top-3 left-3 bg-yellow-400 text-black hover:bg-yellow-500">
                Top item
              </Badge>
            )}
             <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full text-muted-foreground hover:text-primary">
                <Heart className="h-5 w-5"/>
            </Button>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-base leading-tight mb-4 flex-grow group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between mt-auto">
                <div className='flex items-center gap-2'>
                   <div className="flex items-center gap-2 rounded-lg bg-gray-100/80 px-3 py-1.5">
                     <ShoppingBasket className="w-4 h-4 text-muted-foreground"/>
                     {product.originalPrice ? (
                        <>
                           <p className="text-sm text-muted-foreground line-through">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                            </p>
                            <p className="text-sm font-bold text-foreground">
                                ₹{product.price.toLocaleString('en-IN')}
                            </p>
                        </>
                     ) : (
                         <p className="text-sm font-bold text-foreground">
                            ₹{product.price.toLocaleString('en-IN')}
                        </p>
                     )}
                   </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
