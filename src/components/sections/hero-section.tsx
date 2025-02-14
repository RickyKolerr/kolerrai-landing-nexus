
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import { Shield, Zap, BrainCircuit } from "lucide-react";

export const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BrainCircuit,
      text: "Enterprise AI Solutions"
    },
    {
      icon: Zap,
      text: "Intelligent Automation"
    },
    {
      icon: Shield,
      text: "Enterprise Security"
    }
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Transform Your Business with Enterprise AI Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Accelerate digital transformation with our custom-built AI platforms. Leverage advanced automation, cloud infrastructure, and intelligent workflows to drive measurable business growth.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <ButtonGradient 
              size="lg"
              className="hover-lift glow"
              onClick={() => navigate("/contact")}
            >
              Schedule Consultation
            </ButtonGradient>
            <ButtonGradient 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/platform")}
            >
              Explore Platform
            </ButtonGradient>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
