import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface NavbarItemProps {
  href : string,
  children : React.ReactNode,
  isActive ?: boolean
}

const NavbarItems = ({href , children , isActive} : NavbarItemProps) => {
  return (
    <Button
    variant={'outline'}
    className={cn('bg-transparent text-white hover:border-primary  text-lg rounded-full',
      isActive ? "bg-white text-black" : "bg-black text-white"
    )}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
}

export default NavbarItems
