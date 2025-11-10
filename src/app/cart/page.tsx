
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { products } from '@/lib/data';
import { X, ArrowLeft, Info, Plus, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CartPage() {
  const cartItems = products.slice(0, 3).map(p => ({ ...p, quantity: 1 }));
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = 15;
  const promocodeDiscount = -35.48;
  const tax = subtotal * 0.07;
  const total = subtotal + delivery + promocodeDiscount + tax;

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-6">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
            <ArrowLeft className="w-4 h-4"/> Back to Catalog
        </Link>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          Shopping Cart
          <Badge className="h-6">{cartItems.length}</Badge>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2">
                        <div className="relative aspect-square rounded-md overflow-hidden bg-gray-100">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                        </div>
                    </div>
                    <div className="col-span-5">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Category: {item.category}</p>
                    </div>
                    <div className="col-span-3 flex items-center justify-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <Minus className="h-4 w-4"/>
                        </Button>
                        <Input
                            type="text"
                            readOnly
                            value={item.quantity}
                            className="w-12 h-8 text-center bg-transparent border-x-0"
                        />
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4"/>
                        </Button>
                    </div>
                     <div className="col-span-1 text-right font-medium">
                      <p>₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                     <div className="col-span-1 text-right">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Remove</span>
                        </Button>
                    </div>
                  </div>
                ))}
            </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground mt-8">
                <Info className="w-4 h-4"/>
                <p>Fixed delivery price on all in the cart</p>
            </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span>₹{delivery.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">15% Promocode</span>
                    <span className="text-green-600">₹{promocodeDiscount.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (7%)</span>
                    <span>₹{tax.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="relative my-4">
                    <Input id="promocode" placeholder="HAPPY2022" className="pr-12"/>
                    <Badge className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                        <X className="w-3 h-3"/>
                    </Badge>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
            </div>
            <Button size="lg" className="w-full mt-6" asChild>
              <Link href="/checkout">
                Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
