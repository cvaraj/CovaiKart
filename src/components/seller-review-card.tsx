import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import type { Product } from '@/lib/data';

export type SellerReview = {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  product?: Product;
};

interface SellerReviewCardProps {
  review: SellerReview;
}

export function SellerReviewCard({ review }: SellerReviewCardProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {review.product && (
            <div className="hidden sm:block">
                 <Link href={`/products/${review.product.id}`}>
                    <div className="relative h-24 w-24 rounded-md overflow-hidden bg-gray-100">
                        <Image src={review.product.image} alt={review.product.name} fill className="object-cover" />
                    </div>
                </Link>
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted-foreground'}`} />
                  ))}
              </div>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {review.comment}
            </p>
             <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">{review.author}</span>
                {review.product && (
                     <Link href={`/products/${review.product.id}`} className="text-muted-foreground hover:text-primary">
                        Review for: {review.product.name}
                    </Link>
                )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
