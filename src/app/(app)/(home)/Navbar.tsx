"use client";
import React, { Children, useState } from "react";
import NavbarItems from "./NavbarItems";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {  MenuIcon } from "lucide-react";
import Logo from "./Logo";
import NavBarSidebar from "./Navbar-Sidebar";

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/contact", children: "Contact" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen , setIsSidebarOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center bg-black h-20">
      <div>
        <Logo />
      </div>
      <div className="hidden lg:flex h-full items-center gap-2">
        <div className="flex items-center gap-2">
          {navbarItems.map((items) => (
            <NavbarItems
              key={items.href}
              href={items.href}
              isActive={pathname === items.href}
            >
              {items.children}
            </NavbarItems>
          ))}
        </div>

       
        <div className="hidden lg:flex h-full">
          <Button
            
            variant={"secondary"}
            className="border-l-slate-50 h-full px-6 rounded-none text-white bg-transparent hover:bg-white hover:text-black transition-colors text-lg "
          >
            <Link href={"/sign-in"}>Log In</Link>
          </Button>
          <Button
            
            variant={"secondary"}
            className="h-full px-6 rounded-none text-black bg-pink-400 hover:bg-white hover:text-black transition-colors text-lg "
          >
            <Link href={"/start-selling"}>Start Selling</Link>{" "}
          </Button>
        </div>
      </div>

      <NavBarSidebar
      items={navbarItems}
      open={isSidebarOpen}
      onOpenChange={setIsSidebarOpen}
      />

      <div className="flex lg:hidden items-center justify-center">
        <Button
        variant={"ghost"}
        className="pr-2 size-16 border-transparent bg-black hover:bg-black"
        onClick={() => setIsSidebarOpen(true)}
        >
        <MenuIcon color="white" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
