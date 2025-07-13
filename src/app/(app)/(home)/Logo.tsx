import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const poppins = Poppins({
  subsets : ["latin"],
  weight : "700"
})

const Logo = () => {
  return (
    <Link href="/" className='pl-6 flex items-center'>
       <span className={cn("text-white , text-5xl , bg-transparent" , poppins.className)}>
         funroad
       </span>
    </Link>
  )
}

export default Logo
