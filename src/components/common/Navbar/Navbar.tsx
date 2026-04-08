"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  return (
    //main header
    <header className="sticky top-0 z-50 w-full mx-auto border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/*container for navbar content */}
      <div className="w-full container mx-auto flex items-center justify-between p-4">
        {/*logo section*/}
        <Link href="/" className="text-2xl font-bold">
          <Image src={"/images/logo.png"} alt="Logo" width={120} height={60} />
        </Link>

        {/*navigation links*/}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-center gap-2 text-md transition-colors hover:text-[#ED3C6A] ${
                isActiveLink(link.href)
                  ? "font-bold text-[#ED3C6A] underline underline-offset-4"
                  : "font-medium"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hero-primary-button hidden md:inline-flex cursor-pointer"
          >
            <Link href="#meeting">
              Schedule A Meeting
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <nav className="border-t flex flex-col gap-6 mt-10 px-4 pt-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-start justify-baseline gap-4 transition-colors hover:text-[#ED3C6A] ${
                      isActiveLink(link.href)
                        ? "font-bold text-[#ED3C6A] underline underline-offset-4"
                        : "font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="hero-primary-button">
                  <Link href="#meeting">
                    Schedule A Meeting
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
