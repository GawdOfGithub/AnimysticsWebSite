import localFont from "next/font/local"
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./_components/mobile-sidebar";

interface LandingPageProps {
}
const headingFont = localFont({
    src:"./Honk.ttf",
})
const LandingPage = ({}: LandingPageProps) => {

    return (
        <>
        <div className={cn(" h-screen  px-auto p-4 overflow-x-auto  ",headingFont.className)}>
        
            
        </div>
        

           
        </>
    );
};

export default LandingPage;