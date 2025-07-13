import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import React from 'react'

interface NavbarItems {
    href : string,
    children :  React.ReactNode
}

interface Props {
    items : NavbarItems[],
    open : boolean;
    onOpenChange : (open : boolean) => void
}

const NavBarSidebar = ({items , open , onOpenChange} : Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
       <SheetContent 
       side='top'
       className='p-0 transition-none'
       >
       <SheetHeader className='p-4 border-b'>
         <div className='flex items-center'>
            <SheetTitle>
              Menu
            </SheetTitle>
         </div>
       </SheetHeader>
       <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2' >
         {items.map((item) => (
           <Link 
           key={item.href}
           href={item.href}
           className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
           onClick={()=> onOpenChange(false)}
           >
           {item.children}
           </Link>
         ))}
        <div className='border-t'>
        <Link 
        onClick={()=> onOpenChange(false)}
        href={"/sign-in"} 
        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
        >
        Log In
        </Link>
        <Link
        onClick={()=> onOpenChange(false)}
        href={"/start-selling"} 
        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
        >
        Start Selling
        </Link>
        </div>
       </ScrollArea>
       </SheetContent>
    </Sheet>
)
}

export default NavBarSidebar
