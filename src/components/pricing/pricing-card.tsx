
import { Check, Clock } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";

interface PricingFeature {
  name: string;
}

interface PricingPackage {
  name: string;
  price: string;
  timeframe: string;
  description: string;
  features: string[];
}

export const PricingCard = ({ pkg }: { pkg: PricingPackage }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all">
      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
      <p className="text-2xl font-bold text-accent mb-2">{pkg.price}</p>
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Clock className="h-4 w-4" />
        <span>{pkg.timeframe}</span>
      </div>
      <p className="text-muted-foreground mb-6">{pkg.description}</p>
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonGradient 
        className="w-full hover-lift"
        onClick={() => navigate('/contact')}
      >
        Get Started
      </ButtonGradient>
    </div>
  );
};
