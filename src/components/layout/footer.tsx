import Link from "next/link";
import { Mountain } from "lucide-react";

export function Footer() {
  const sections = [
    {
      title: "Marketplace",
      links: [
        { name: "About Us", href: "#" },
        { name: "Seller Policy", href: "#" },
        { name: "Buyer Policy", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Returns & Refunds", href: "#" },
        { name: "Shipping Information", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "GST & Invoicing", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-7 w-7 text-primary" />
              <span className="font-bold font-headline text-xl">CovaiKart</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your local marketplace, connecting Coimbatore's sellers with buyers.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CovaiKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
