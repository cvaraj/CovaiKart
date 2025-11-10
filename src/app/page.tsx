
import Image from 'next/image';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { ProductCarousel } from '@/components/product-carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import placeholderData from '@/lib/placeholder-images.json';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const categories = [...new Set(products.map(p => p.category))];
  const heroImage1 = placeholderData.placeholderImages.find(img => img.imageHint === 'silk saree');
  const heroImage2 = placeholderData.placeholderImages.find(img => img.imageHint === 'clay pot');
  const heroImage3 = placeholderData.placeholderImages.find(img => img.imageHint === 'turmeric powder');

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
              Discover Coimbatore's Finest
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              From traditional crafts to modern marvels, shop local and support your community. We bring the best of Kovai to your doorstep.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#featured">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/vendor/login">Become a Seller</Link>
              </Button>
            </div>
          </div>
          <div className="relative grid grid-cols-3 grid-rows-3 gap-2 min-h-[300px] md:min-h-[450px]">
            {heroImage1 && (
                <div className="relative col-span-2 row-span-3 rounded-lg overflow-hidden group">
                     <Image
                        src={heroImage1.imageUrl}
                        alt={heroImage1.description}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={heroImage1.imageHint}
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            )}
             {heroImage2 && (
                <div className="relative col-span-1 row-span-2 rounded-lg overflow-hidden group">
                     <Image
                        src={heroImage2.imageUrl}
                        alt={heroImage2.description}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={heroImage2.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            )}
            {heroImage3 && (
                <div className="relative col-span-1 row-span-1 rounded-lg overflow-hidden group">
                     <Image
                        src={heroImage3.imageUrl}
                        alt={heroImage3.description}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={heroImage3.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            )}
          </div>
        </div>
      </section>

      {/* Recommended For You Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">Recommended For You</h2>
          <ProductCarousel allProducts={products} />
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link href={`/category/${category.toLowerCase()}`} key={category}>
                <div className="group aspect-video bg-secondary rounded-lg flex items-center justify-center p-4 transition-colors hover:bg-primary">
                  <span className="font-semibold text-center text-secondary-foreground group-hover:text-primary-foreground">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
