
export default function TeamLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
      <div
      className="relative h-full bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: `url(./anton.jpg)` }}
    >
  
      {/* <div className="absolute inset-0  "/> */}
      <main className="relative h-full ">
        {children}
      </main>
    </div>
        
    );
  }
  