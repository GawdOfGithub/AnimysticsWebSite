
export default function ContactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
      <div
      className="absolute h-full bg-no-repeat bg-cover bg-center z-20"
      style={{ backgroundImage: `url(./cute.jpg)`,height:"132vh" }}
    >
  
  
      <main className="relative h-full ">
        {children}
      </main>
    </div>
        
    );
  }
  