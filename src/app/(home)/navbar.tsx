'use client'
import React, { Children } from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
    subsets : ["latin"],
    weight : ["700"],
})

interface NavbarItemsProps {
   href : string,
   children : React.ReactNode,
   isActive?: boolean
}

const NavbarItem = ({
    href,
    children,
    isActive
} :  NavbarItemsProps) => { 
   return (
    <Button
    asChild
    variant={'outline'}
    className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
     isActive && "bg-black text-white hover:bg-black hover:text-white"
    )}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
   )
}

const navbarItems = [
    {href : "/" ,  children : "Home"},
    {href : "/about" ,  children : "About"},
    {href : "/features" ,  children : "Features"},
    {href : "/pricing" ,  children : "Pricing"},
    {href : "/contact" ,  children : "Contact"}
]

const Navbar = () => {
   const pathname = usePathname()
  return (
    <nav className='h-20 border-b bg-white font-medium flex justify-between'>
      <Link href="/" className='pl-6 flex items-center'>
        <span className={cn("text-5xl font-semibold" , poppins.className)}>funroad</span>
      </Link>

      <div className="pr-6 items-center gap-4 hidden lg:flex">
       {navbarItems.map((items) => (
         <NavbarItem
         key={items.href}
         href={items.href}
         isActive={pathname === items.href}
         >
          {items.children}
         </NavbarItem>
       ))}
      </div>
    </nav>
  )
}

export default Navbar
