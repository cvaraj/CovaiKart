'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mountain } from "lucide-react";
import Link from "next/link";

export default function VendorSignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-secondary">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1 text-center">
            <Mountain className="h-8 w-8 text-primary mx-auto" />
          <CardTitle className="text-2xl font-bold font-headline">Vendor Sign Up</CardTitle>
          <CardDescription>
            Create your account to start selling on KonguMart
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Kovai Weavers" required />
              </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
                <Link href="/vendor/dashboard">Create Account</Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/vendor/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
