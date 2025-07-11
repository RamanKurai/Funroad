"use client"
import React, { Children } from 'react'
import Logo from './Logo'
import NavbarItems from './NavbarItems'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const navbarItems = [
  {href: "/" , children: "Home"},
  {href : "/about" , children : "About"},
  {href : "/contact" , children : "Contact"},
  {href : "/features" , children : "Features"},
  {href : "/pricing" , children : "Pricing"},
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex justify-between items-center bg-black h-20'>
      <div>
        <Logo/>
      </div>
      <div className='hidden lg:flex h-full items-center gap-4' >
        <div className="flex items-center gap-4">
        {navbarItems.map((items) => (
       <NavbarItems
       key={items.href}
       href={items.href}
       isActive={pathname === items.href}>
      {items.children}
      </NavbarItems>
      ))}
      </div>
        <div className='hidden lg:flex h-full'>
          <Button 
          variant={'secondary'}
          className='border-l-slate-50 h-full px-6 rounded-none text-white bg-transparent hover:bg-white hover:text-black transition-colors text-lg ' >
          Log In
        </Button>
        <Button
        variant={'secondary'}
        className='h-full px-6 rounded-none text-black bg-pink-400 hover:bg-white hover:text-black transition-colors text-lg '
        >
          Start Selling
        </Button>
        </div>
        </div>
    </nav>
      
    
  )
}

export default Navbar
