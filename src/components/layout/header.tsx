
"use client";

import Link from "next/link";
import { Mountain, Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { products } from "@/lib/data";

export function Header() {
  const categories = [...new Set(products.map(p => p.category))];

  const navLinks = [
    { name: "Deals", href: "#" },
    { name: "Seller Zone", href: "/vendor/login" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">KonguMart</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
             <DropdownMenu>
              <DropdownMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center">Categories</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Shop By Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map(category => (
                   <DropdownMenuItem key={category} asChild>
                     <Link href={`/category/${category.toLowerCase()}`}>{category}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <nav className="flex flex-col h-full">
              <Link href="/" className="mb-8 flex items-center space-x-2">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">KonguMart</span>
              </Link>
              <div className="flex flex-col space-y-4 text-lg">
                <p className="font-semibold">Categories</p>
                 {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="transition-colors hover:text-foreground/80 text-foreground/60 text-base ml-2"
                  >
                    {category}
                  </Link>
                ))}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="md:hidden flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">KonguMart</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 hidden sm:block md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full bg-secondary pl-9 md:w-[280px] lg:w-[320px]"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
