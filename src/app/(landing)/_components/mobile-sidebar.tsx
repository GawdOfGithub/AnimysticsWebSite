"use client"
import {Menu} from 'lucide-react'
import {useState,useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { userMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { Button } from '@/components/ui/button'
import { Sheet,SheetContent } from '@/components/ui/sheet'
import Sidebar from '@/components/Sidebar'
export const MobileSidebar = ()=>
{
    const pathname = usePathname()
    const onOpen = userMobileSidebar((state) => state.onOpen);
const onClose = userMobileSidebar((state) => state.onClose);
const isOpen = userMobileSidebar((state) => state.isOpen);
const [isMounted, setIsMounted] = useState(false);

useEffect(()=>{
    setIsMounted(false)
},[])

useEffect(()=>
{
    onClose()
},[pathname,onClose])
// if(!isMounted)
// {
//     return null
// }
return(
    <>
     <Button
        onClick={onOpen}
        className="block md:hidden mr-2 bg-black z-50"
        variant="default"
        size="sm"
      >
    
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="p-2 pt-10"
        >
        <Sidebar
        />
      </SheetContent>
    </Sheet>


    
    </>
)


}

