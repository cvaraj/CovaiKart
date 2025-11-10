import {
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"
import Link from 'next/link';

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
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { products as allProducts } from "@/lib/data"


export default function InventoryPage() {
    const products = allProducts.slice(0, 5).map(p => ({
        ...p,
        stock: Math.floor(Math.random() * 100)
    }));

  return (
    <>
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-4">
            <Card className="w-full">
                <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>
                    Track and manage stock levels for your products.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>
                        <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium">
                                {product.name}
                            </TableCell>
                            <TableCell className="font-medium">
                                {`SKU-${product.id.split('_')[1].padStart(4, '0')}`}
                            </TableCell>
                             <TableCell>
                                {product.stock}
                            </TableCell>
                            <TableCell>
                                {product.stock > 20 && <Badge>In Stock</Badge>}
                                {product.stock <= 20 && product.stock > 0 && <Badge variant="destructive">Low Stock</Badge>}
                                {product.stock === 0 && <Badge variant="secondary">Out of Stock</Badge>}
                            </TableCell>
                            <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem asChild><Link href="/vendor/dashboard/inventory/edit">Update Stock</Link></DropdownMenuItem>
                                <DropdownMenuItem>View History</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-5</strong> of <strong>{allProducts.length}</strong> products
                    </div>
                </CardFooter>
            </Card>
        </div>
    </>
  )
}
