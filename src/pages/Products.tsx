
import { BrainCircuit, Bot, Cpu, Database } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { MainNav } from "@/components/main-nav";
import { FeatureCard } from "@/components/feature-card";

const Products = () => {
  return (
    <div className="relative min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Our AI Products
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                Discover our suite of advanced AI solutions
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <FeatureCard
                icon={BrainCircuit}
                title="KolerrAI Core"
                description="Our flagship AI platform for enterprise-scale operations"
                className="fade-in"
              />
              <FeatureCard
                icon={Bot}
                title="KolerrBot"
                description="Intelligent chatbot solution for customer service"
                className="fade-in"
              />
              <FeatureCard
                icon={Cpu}
                title="KolerrML"
                description="Machine learning pipeline for data processing"
                className="fade-in"
              />
              <FeatureCard
                icon={Database}
                title="KolerrAnalytics"
                description="Advanced analytics and insights platform"
                className="fade-in"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
