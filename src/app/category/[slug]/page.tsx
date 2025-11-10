
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CategoryFilters } from '@/components/category-filters';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const categoryProducts = products.filter(p => p.category.toLowerCase() === slug);

  return (
    <div className="container py-12 md:py-16">
        <Breadcrumb className="mb-8">
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>{categoryName}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
        <aside className="lg:col-span-1">
            <CategoryFilters />
        </aside>
        <main className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {categoryProducts.length > 0 ? (
                categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
                ) : (
                <p className="col-span-full text-center text-muted-foreground">No products found in this category.</p>
                )}
            </div>
        </main>
      </div>
    </div>
  );
}
