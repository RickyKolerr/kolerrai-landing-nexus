
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { CSSProperties } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  style,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-accent/10 bg-white/5 p-6",
        "transition-all duration-500 hover:border-accent/20 hover:bg-accent/5",
        "hover-lift glow card-shine",
        className
      )}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>
      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {description}
      </p>
    </div>
  );
}
