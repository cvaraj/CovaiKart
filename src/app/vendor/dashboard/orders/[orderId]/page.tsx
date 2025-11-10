
import {
  ChevronLeft,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/data"


export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  const orderItems = products.slice(0, 2);

  return (
    <div className="mx-auto grid max-w-6xl flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Link href="/vendor/dashboard/orders">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Order {params.orderId.toUpperCase()}
        </h1>
        <Badge variant="outline" className="ml-auto sm:ml-0">
          Fulfilled
        </Badge>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm">
            Invoice
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
              <DropdownMenuItem>Print Packing Slip</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card>
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Order Details
                </CardTitle>
                <CardDescription>Date: July 12, 2023</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="font-semibold text-lg mb-4">Order Items</div>
                <div className="space-y-4">
                    {orderItems.map(item => (
                        <div key={item.id} className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-md overflow-hidden">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">1</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium leading-tight">{item.name}</p>
                                <p className="text-sm text-muted-foreground">SKU: {`SKU-${item.id.split('_')[1].padStart(4, '0')}`}</p>
                            </div>
                            <p className="font-medium">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-sm text-muted-foreground">
                Updated <time dateTime="2023-11-23">July 12, 2023</time>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
               <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹4500.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₹50.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>₹315.00</span>
                    </div>
                     <Separator className="my-2"/>
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>₹4865.00</span>
                    </div>
                </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Shipping Information
                </CardTitle>
                <CardDescription>
                  <address className="not-italic">
                    Liam Johnson<br />
                    123 Main St<br />
                    Coimbatore, 641001
                  </address>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Tracking No</dt>
                    <dd>
                        <a href="#" className="hover:underline">XYZ123456789</a>
                    </dd>
                </div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Customer</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="grid gap-0.5">
                  <p className="font-medium">Liam Johnson</p>
                  <p className="text-sm text-muted-foreground">2 orders</p>
                </div>
              </div>
              <Separator />
               <div className="grid gap-2">
                  <p className="font-medium">Contact Information</p>
                  <div className="text-muted-foreground text-sm">
                    <a href="mailto:liam@example.com" className="hover:underline">liam@example.com</a>
                    <p>+91 98765 43210</p>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
