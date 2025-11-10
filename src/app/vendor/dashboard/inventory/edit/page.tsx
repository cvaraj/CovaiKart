
import {
  ChevronLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function InventoryEditPage() {
  return (
    <div className="mx-auto grid max-w-2xl flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Link href="/vendor/dashboard/inventory">
            <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Update Stock
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save Changes</Button>
        </div>
      </div>
      <div className="grid gap-4">
        <Card>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Image
                        alt="Product image"
                        className="aspect-square w-20 rounded-md object-cover"
                        height="80"
                        src="https://picsum.photos/seed/saree/100/100"
                        width="80"
                    />
                    <div>
                        <CardTitle>Handwoven Silk Saree</CardTitle>
                        <CardDescription>
                            SKU: SAREE-SILK-01
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input
                    id="stock"
                    type="number"
                    className="w-full"
                    defaultValue="25"
                  />
                </div>
              </div>
            </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save Changes</Button>
      </div>
    </div>
  )
}
