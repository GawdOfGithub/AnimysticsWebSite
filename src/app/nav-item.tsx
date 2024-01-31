"use client"
import localFont from "next/font/local"
import {useRouter,usePathname} from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import {
    Home,
    CalendarPlus2,
    Users,
    Phone,
    Palette

  } from "lucide-react";

  const headingFont = localFont({
    src:"./Bruce.ttf",
})

interface NavItemProps {
}

const NavItem = ({}: NavItemProps) => {
const router = useRouter()
const pathname = usePathname()
const routes = [
    {
      label: "Home",
      icon: <Home className="h-4 w-4 mr-2" />,
      href: `/home`,
    },
    {
      label: "Events",
      icon: <CalendarPlus2 className="h-4 w-4 mr-2" />,
      href: `/Events`,
    },
    {
      label: "Artwork",
      icon: <Palette className="h-4 w-4 mr-2" />,
      href: `/Artwork`,
    },
    {
      label: "Our Team",
      icon: <Users className="h-4 w-4 mr-2" />,
      href: `/Team`,
    },
    {
      label: "Contact us",
      icon: <Phone className="h-4 w-4 mr-2" />,
      href: `/ContactUs`,
    },
  ];
  const onClick = (href:string)=>{
    router.push(href)
  }
    return (
        <>
       <div
    className="relative h-full bg-no-repeat bg-cover bg-center "
    style={{ backgroundImage: `url(./blossom.jpg)` }}
  >
    <div>
            {routes.map((item, index) => (
                    <Link href={item.href} className={cn("flex items-center gap-x-2 p-1.5 text-orange-800 rounded-md hover:text-black transition text-start no-underline hover:no-underline",headingFont.className)} key={index}>
                      <div>{item.icon}</div>
                      <div className="text-2xl ">{item.label}</div>
                      
                
              </Link>
            ))}
            </div>
            </div>
           
        </>
    );
};

export default NavItem;