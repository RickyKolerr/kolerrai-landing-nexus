
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { BrainCircuit, Bot, Cpu, Database, Video, BookOpen, Shield, Gift, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
                AI-powered solutions for modern business challenges
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Kolerr Platform</h2>
                <p className="text-muted-foreground mb-6">
                  An AI-powered platform connecting KOLs and brands for seamless collaboration and enhanced engagement.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-accent" />
                    <span>Smart Matchmaking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-accent" />
                    <span>Campaign Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span>Performance Tracking</span>
                  </li>
                </ul>
                <ButtonGradient 
                  className="w-full"
                  onClick={() => handleNavigation('/product/kolerr-platform')}
                >
                  Learn More
                </ButtonGradient>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Audiovable</h2>
                <p className="text-muted-foreground mb-6">
                  Transform text into engaging audiobooks and educational materials with AI-optimized learning experiences.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-accent" />
                    <span>Natural Voice Synthesis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-accent" />
                    <span>Learning Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-accent" />
                    <span>Smart Content Adaptation</span>
                  </li>
                </ul>
                <ButtonGradient 
                  className="w-full"
                  onClick={() => handleNavigation('/product/audiovable')}
                >
                  Learn More
                </ButtonGradient>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">KiddOAi</h2>
                <p className="text-muted-foreground mb-6">
                  AI-powered video content moderation and child development platform, fully COPPA compliant.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-accent" />
                    <span>Smart Content Filtering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-accent" />
                    <span>Brand Rewards Program</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <span>COPPA Compliance</span>
                  </li>
                </ul>
                <ButtonGradient 
                  className="w-full"
                  onClick={() => handleNavigation('/product/kiddoai')}
                >
                  Learn More
                </ButtonGradient>
              </div>
            </div>

            <div className="mt-24 text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8">
                Get started with our AI-powered solutions today
              </p>
              <ButtonGradient 
                onClick={() => handleNavigation('/contact')}
              >
                Contact Sales
              </ButtonGradient>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
