
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            AI-Powered PaaS & SaaS Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leverage advanced AI technology to optimize, automate, and scale your business operations with our custom-built platforms and solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <ButtonGradient onClick={() => navigate("/contact")}>Get Started</ButtonGradient>
            <ButtonGradient variant="outline" onClick={() => navigate("/about")}>Learn More</ButtonGradient>
          </div>
        </div>
      </div>
    </section>
  );
};
