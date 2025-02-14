
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, ChevronLeft, Home, Box, Cpu, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonGradient } from "./ui/button-gradient";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function EnhancedNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Box, label: "Products", path: "/products" },
    { icon: Cpu, label: "Platform", path: "/platform" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0].clientX;
      const swipeDistance = touchStart - touchEnd;

      if (swipeDistance < -100 && location.pathname !== '/') {
        navigate(-1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate, location.pathname, touchStart]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {location.pathname !== '/' && (
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-accent/10 transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/096bca47-8c13-4128-992a-b9daa302e13b.png" 
              alt="Kolerr" 
              className="h-16 w-auto hover-scale transition-all duration-300" 
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  "hover:bg-accent/10",
                  location.pathname === item.path ? "text-accent" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ButtonGradient 
              size="sm"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </ButtonGradient>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button 
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      "hover:bg-accent/10",
                      location.pathname === item.path ? "text-accent bg-accent/5" : "text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
                <ButtonGradient 
                  className="mt-4"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </ButtonGradient>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
