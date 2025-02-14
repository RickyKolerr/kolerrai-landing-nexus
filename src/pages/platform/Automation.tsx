
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Cpu, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Automation = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />
      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                AI Automation
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl mb-8 slide-up">
                Built-in AI capabilities that automate complex workflows and optimize business processes.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Intelligent Process Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Leverage advanced AI algorithms to automate repetitive tasks and streamline your business operations.
                </p>
                <ButtonGradient onClick={() => navigate('/contact')}>
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonGradient>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                <img 
                  src="/lovable-uploads/781a2a9e-5813-4d1d-aba1-a8dfbf69a9ac.png" 
                  alt="AI Automation" 
                  className="w-full rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">Smart Workflows</h3>
                <p className="text-muted-foreground">
                  Create and manage intelligent workflows that adapt to your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Automation;
