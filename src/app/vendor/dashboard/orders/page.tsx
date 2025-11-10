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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

const orders = [
  {
    id: "ORD001",
    customer: "Liam Johnson",
    email: "liam@example.com",
    date: "2023-07-12 10:42 AM",
    status: "Fulfilled",
    total: 250.00,
  },
  {
    id: "ORD002",
    customer: "Olivia Smith",
    email: "olivia@example.com",
    date: "2023-07-13 03:21 PM",
    status: "Pending",
    total: 150.00,
  },
  {
    id: "ORD003",
    customer: "Noah Williams",
    email: "noah@example.com",
    date: "2023-07-14 11:59 AM",
    status: "Fulfilled",
    total: 350.00,
  },
  {
    id: "ORD004",
    customer: "Emma Brown",
    email: "emma@example.com",
    date: "2023-07-15 09:30 AM",
    status: "Shipped",
    total: 450.00,
  },
  {
    id: "ORD005",
    customer: "James Wilson",
    email: "james@example.com",
    date: "2023-07-16 05:00 PM",
    status: "Cancelled",
    total: 550.00,
  },
];


export default function OrdersPage() {
  return (
    <>
         <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
        </div>
        <Tabs defaultValue="all">
            <div className="flex items-center">
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="fulfilled">Fulfilled</TabsTrigger>
                <TabsTrigger value="shipped" className="hidden sm:flex">
                Shipped
                </TabsTrigger>
                 <TabsTrigger value="cancelled" className="hidden sm:flex">
                Cancelled
                </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                    </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                    Fulfilled
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                    Shipped
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                </span>
                </Button>
            </div>
            </div>
            <TabsContent value="all">
            <Card>
                <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                    A list of all orders from your store.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Order</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                        Date
                        </TableHead>
                        <TableHead className="text-right">
                        Total
                        </TableHead>
                        <TableHead>
                        <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {orders.map(order => (
                        <TableRow key={order.id}>
                           <TableCell className="font-medium">
                                <Link href={`/vendor/dashboard/orders/${order.id.toLowerCase()}`} className="hover:underline">{order.id}</Link>
                            </TableCell>
                            <TableCell className="font-medium">
                                {order.customer}
                            </TableCell>
                            <TableCell>
                            <Badge 
                                variant={
                                    order.status === "Fulfilled" ? "default" :
                                    order.status === "Pending" ? "secondary" :
                                    "outline"
                                }
                                className={
                                     order.status === "Fulfilled" ? "bg-green-600 text-white" :
                                     order.status === "Pending" ? "bg-yellow-500 text-white" : ""
                                }
                            >
                                {order.status}
                            </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                {order.date}
                            </TableCell>
                            <TableCell className="text-right">
                                ₹{order.total.toFixed(2)}
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
                                <DropdownMenuItem asChild>
                                    <Link href={`/vendor/dashboard/orders/${order.id.toLowerCase()}`}>View Details</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
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
                    Showing <strong>1-5</strong> of <strong>{orders.length}</strong>{" "}
                    orders
                </div>
                </CardFooter>
            </Card>
            </TabsContent>
        </Tabs>
    </>
  )
}
