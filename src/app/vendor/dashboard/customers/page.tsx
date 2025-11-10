
import {
  File,
  ListFilter,
  MoreHorizontal,
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

const customers = [
  {
    name: "Liam Johnson",
    email: "liam@example.com",
    orders: 3,
    totalSpent: "₹250.00",
  },
  {
    name: "Olivia Smith",
    email: "olivia@example.com",
    orders: 1,
    totalSpent: "₹150.00",
  },
  {
    name: "Noah Williams",
    email: "noah@example.com",
    orders: 2,
    totalSpent: "₹350.00",
  },
  {
    name: "Emma Brown",
    email: "emma@example.com",
    orders: 1,
    totalSpent: "₹450.00",
  },
  {
    name: "James Wilson",
    email: "james@example.com",
    orders: 5,
    totalSpent: "₹550.00",
  },
];


export default function CustomersPage() {
  return (
    <>
         <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
            <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                </span>
                </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Your Customers</CardTitle>
            <CardDescription>
                An overview of all customers who have purchased from you.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead className="hidden sm:table-cell">Orders</TableHead>
                    <TableHead className="text-right">Total Spent</TableHead>
                    <TableHead>
                    <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {customers.map(customer => (
                    <TableRow key={customer.email}>
                        <TableCell className="font-medium">
                            {customer.name}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            {customer.email}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Badge variant="outline">{customer.orders}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            {customer.totalSpent}
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
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Contact Customer</DropdownMenuItem>
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
                Showing <strong>1-{customers.length}</strong> of <strong>{customers.length}</strong>{" "}
                customers
            </div>
            </CardFooter>
        </Card>
    </>
  )
}
