"use client"
import {Fan} from 'lucide-react'
import {useState,useEffect,useCallback} from 'react'
import { usePathname } from 'next/navigation'
import { userMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { Button } from '@/components/ui/button'
import { Sheet,SheetContent } from '@/components/ui/sheet'
import Sidebar from '@/components/Sidebar'
import { cn } from '@/lib/utils'
export const MobileSidebar = ()=>
{
    const pathname = usePathname()
    const onOpen = userMobileSidebar((state) => state.onOpen);
const onClose = userMobileSidebar((state) => state.onClose);
const isOpen = userMobileSidebar((state) => state.isOpen);
const [isMounted, setIsMounted] = useState(false);
const [spin, setSpin] = useState(false);

useEffect(()=>{
    setIsMounted(true)
},[])

useEffect(()=>
{
    onClose()
},[pathname,onClose])
// if(!isMounted)
// {
//     return null
// }
const clickhandler = useCallback(() => {
  setSpin(true);
  setTimeout(() => {
    setSpin(false);
    onOpen();
  }, 1000);
}, [onOpen]);
// if (isOpen) setSpin(false)
return(
    <>
     <Button
        onClick={clickhandler}
        className="block md:hidden mr-2 bg-gray-800 z-50"
        variant="default"
        size="sm"
      >
    
        {/* <Fan className="h-8 w-8 text-3xl  " /> */}
        <Fan className={cn("h-8 w-8 text-3xl",spin && "animate-spin")}/>
        
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

