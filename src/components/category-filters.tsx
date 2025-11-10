
'use client'

import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Square } from 'lucide-react';
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function CategoryFilters() {
    const brands = ["Adidas", "Columbia", "Demix", "New Balance", "Nike", "Xiaomi", "Asics"];

    return (
        <div className="space-y-6">
            <Card className="p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-1">Price Range</h3>
                <p className="text-sm text-muted-foreground mb-4">The average price is ₹15,000</p>
                <Slider defaultValue={[2500]} max={50000} step={100} />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>₹2,500</span>
                    <span>₹50,000</span>
                </div>
            </Card>

            <Card className="p-6 bg-white shadow-sm">
                 <h3 className="font-semibold mb-4">Star Rating</h3>
                 <div className="flex items-center space-x-2">
                    <div className="flex items-center text-yellow-400">
                        <Star className="w-5 h-5 fill-current"/>
                        <Star className="w-5 h-5 fill-current"/>
                        <Star className="w-5 h-5 fill-current"/>
                        <Star className="w-5 h-5 fill-current"/>
                        <Star className="w-5 h-5 text-gray-300 fill-gray-300"/>
                    </div>
                    <span className="text-sm text-muted-foreground">4 Stars & up</span>
                 </div>
            </Card>

            <Card className="p-6 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Brand</h3>
                    <button className="text-sm text-primary hover:underline">Reset</button>
                </div>
                <div className="space-y-3">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center justify-between">
                            <Label htmlFor={brand.toLowerCase()} className="flex items-center gap-3 font-normal text-sm cursor-pointer">
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">
                                    {brand.substring(0,2).toUpperCase()}
                                </div>
                                {brand}
                            </Label>
                            <Checkbox id={brand.toLowerCase()} defaultChecked={brand !== 'Asics'} className="h-5 w-5 rounded-md" />
                        </div>
                    ))}
                </div>
                 <button className="text-sm text-primary hover:underline mt-4">More Brand</button>
            </Card>
             <Card className="p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-4">Delivery Options</h3>
                <div className="grid grid-cols-2 gap-2">
                    <Button variant="default">Standard</Button>
                    <Button variant="outline" className="bg-gray-100 text-foreground">Pick Up</Button>
                </div>
            </Card>
        </div>
    )
}
