
import { Home, Box, Cpu, Lightbulb, DollarSign, BookOpen, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function PwaMenuBar() {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Box, label: "Products", path: "/products" },
    { icon: Cpu, label: "Platform", path: "/platform" },
    { icon: Lightbulb, label: "Solutions", path: "/solutions" },
    { icon: DollarSign, label: "Pricing", path: "/pricing" },
    { icon: BookOpen, label: "Blog", path: "/blog" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border/40 py-2 px-4 md:hidden">
      <div className="grid grid-cols-4 gap-1">
        {menuItems.slice(0, 4).map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-colors",
              "hover:bg-accent/10",
              location.pathname === item.path && "text-accent"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
