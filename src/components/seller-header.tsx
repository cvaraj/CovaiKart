import Image from 'next/image';
import { Star, MapPin, Package, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';

type Seller = {
  name: string;
  avatar: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  productsCount: number;
  location: string;
  turnaroundTime: string;
  memberSince: number;
};

interface SellerHeaderProps {
  seller: Seller;
}

export function SellerHeader({ seller }: SellerHeaderProps) {
  return (
    <Card className="bg-white shadow-sm overflow-hidden">
        <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-primary/10">
                        <Image src={seller.avatar} alt={seller.name} fill className="object-cover" />
                    </div>
                    <h1 className="text-2xl font-bold">{seller.name}</h1>
                    <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{seller.rating}</span>
                        <span className="text-sm text-muted-foreground">({seller.reviewsCount} reviews)</span>
                    </div>
                     <p className="text-sm text-muted-foreground mt-1">Member since {seller.memberSince}</p>
                </div>
                <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {seller.bio}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-muted-foreground" />
                            <span>{seller.productsCount} Products</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>From {seller.location}</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{seller.turnaroundTime} TAT</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                            <span>Verified Seller</span>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
