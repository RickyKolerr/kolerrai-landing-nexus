
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BrainCircuit, Bot, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Our Products
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
                Comprehensive AI solutions for modern businesses
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">KolerrAI Platform</h2>
                <p className="text-muted-foreground mb-6">
                  Our flagship AI platform that powers enterprise-scale operations with intelligent automation, data processing, and analytics.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-accent" />
                    <span>Advanced Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-accent" />
                    <span>Real-time Data Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-accent" />
                    <span>AI-powered Automation</span>
                  </li>
                </ul>
                <ButtonGradient asChild className="w-full">
                  <Link to="/product/platform">Learn More</Link>
                </ButtonGradient>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <Bot className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">KolerrAI Services</h2>
                <p className="text-muted-foreground mb-6">
                  Customizable AI services that integrate seamlessly with your existing infrastructure and workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-accent" />
                    <span>Custom AI Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-accent" />
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-accent" />
                    <span>Workflow Automation</span>
                  </li>
                </ul>
                <ButtonGradient asChild className="w-full">
                  <Link to="/product/services">Learn More</Link>
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
