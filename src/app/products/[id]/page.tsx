
import Image from 'next/image';
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
import { Button } from '@/components/ui/button';
import { Star, Heart, Share2, GitCompareArrows, ChevronDown, Check, Truck, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: Product | undefined = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const memoryOptions = ["64", "128", "256", "1TB"];
  const colors = ["#8A8A8E", "#C9A1B2", "#AEE8C2"];

  return (
    <div className="bg-background">
      <div className="container py-8 md:py-12">
        <Breadcrumb className="mb-8">
            <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href={`/category/${product.category.toLowerCase()}`}>{product.category}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Image Gallery */}
            <div className="lg:col-span-5">
                <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
                     <div className="aspect-square relative">
                        {product.originalPrice && (
                            <Badge variant="destructive" className="absolute top-2 left-2 z-10 bg-red-500 text-white">-10%</Badge>
                        )}
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-4">
                <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted-foreground'}`} />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.reviews} reviews</span>
                </div>

                <div className="mt-6 space-y-4">
                    <div>
                        <h3 className="text-sm font-semibold mb-2">Select Memory</h3>
                        <div className="flex flex-wrap gap-2">
                            {memoryOptions.map(opt => (
                                <Button key={opt} variant={opt === "128" ? "default" : "outline"} className="bg-white hover:bg-gray-100 border-gray-300">
                                    {opt}
                                </Button>
                            ))}
                        </div>
                        <a href="#" className="text-sm text-primary mt-2 inline-block">What memory is better?</a>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold mb-2">Choose color</h3>
                        <div className="flex items-center gap-2">
                            {colors.map((color, index) => (
                                <button key={color} className={`h-8 w-8 rounded-full border-2 ${index === 0 ? 'border-primary' : 'border-transparent'}`} style={{ backgroundColor: color }} />
                            ))}
                        </div>
                    </div>
                </div>

                <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="specifications">
                        <AccordionTrigger className="text-base font-semibold">Specifications</AccordionTrigger>
                        <AccordionContent>
                           <ul className="space-y-2 text-sm text-muted-foreground">
                               <li>- Handcrafted in Coimbatore with traditional techniques.</li>
                               <li>- Made from 100% pure, locally sourced materials.</li>
                               <li>- Eco-friendly and sustainable production process.</li>
                               <li>- Supports local artisans and their families.</li>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                 <div className="flex items-center gap-6 text-sm text-muted-foreground mt-6">
                    <button className="flex items-center gap-2 hover:text-primary"><Heart className="w-4 h-4"/> Wishlist</button>
                    <button className="flex items-center gap-2 hover:text-primary"><GitCompareArrows className="w-4 h-4"/> Compare</button>
                    <button className="flex items-center gap-2 hover:text-primary"><Share2 className="w-4 h-4"/> Share</button>
                </div>
            </div>

             {/* Purchase Card */}
            <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">
                            ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-muted-foreground line-through">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                        )}
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-3">
                            <Truck className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"/>
                            <div>
                                <p className="font-semibold">Delivery</p>
                                <p className="text-muted-foreground">February 1, from ₹15</p>
                            </div>
                        </div>
                         <div className="flex gap-3">
                            <Package className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"/>
                            <div>
                                <p className="font-semibold">Pickup Point</p>
                                <p className="text-muted-foreground">Today in 3 warehouses, free</p>
                            </div>
                        </div>
                    </div>
                     <Separator className="my-4" />
                      <div className="text-sm">
                        <span className="text-muted-foreground">Deliver to: </span>
                        <a href="#" className="font-medium text-primary underline">Coimbatore, 641001</a>
                    </div>
                    <div className="text-sm flex items-center gap-2 mt-2">
                        <Check className="h-4 w-4 text-green-500"/>
                        <span className="font-medium text-green-600">In Stock</span>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <Button size="lg">Buy Now</Button>
                        <Button size="lg" variant="outline" className="bg-white">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
