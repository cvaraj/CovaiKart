import {
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"
import Link from "next/link";

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
import { products } from "@/lib/data"

export default function CategoriesPage() {
    const categories = [...new Set(products.map(p => p.category))].map(c => ({
        name: c,
        productCount: products.filter(p => p.category === c).length
    }));

  return (
    <>
         <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Categories</h1>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-4">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Product Categories</CardTitle>
                    <CardDescription>
                        Manage your product categories.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex items-center gap-2">
                        <Button size="sm" className="h-8 gap-1" asChild>
                          <Link href="/vendor/dashboard/categories/new">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Category
                            </span>
                          </Link>
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Category Name</TableHead>
                            <TableHead>Product Count</TableHead>
                            <TableHead>
                            <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {categories.map(category => (
                            <TableRow key={category.name}>
                                <TableCell className="font-medium">
                                    {category.name}
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">{category.productCount}</Badge>
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
                                    <DropdownMenuItem asChild><Link href="/vendor/dashboard/categories/edit">Edit</Link></DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
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
                        Showing <strong>1-{categories.length}</strong> of <strong>{categories.length}</strong>{" "}
                        categories
                    </div>
                </CardFooter>
            </Card>
        </div>
    </>
  )
}
