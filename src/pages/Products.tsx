
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  BrainCircuit, Bot, Cpu, Database, Video, BookOpen, Shield, Gift, Award,
  MessageCircle, FileText, CreditCard, BarChart, Upload, Headphones,
  Share2, Users, Clock, Bell, Lock, ChartLine, Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 text-accent mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Discover Our Solutions</span>
              </div>
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                AI-Powered Products
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
                Transform your business with our suite of innovative AI solutions designed for modern challenges
              </p>
            </div>

            <div className="space-y-24">
              {/* Kolerr Platform */}
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 via-background to-primary/5 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background/80 backdrop-blur-xl rounded-xl p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary mb-6 transform transition-transform duration-300 group-hover:scale-110">
                        <BrainCircuit className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4">Kolerr Platform</h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        An AI-powered platform revolutionizing collaboration between KOLs and brands through smart matchmaking and comprehensive campaign management.
                      </p>
                      <ButtonGradient 
                        onClick={() => handleNavigation('/products/kolerr-platform')}
                        className="mb-6"
                      >
                        Explore Platform
                      </ButtonGradient>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { icon: Bot, title: "AI Matchmaking", desc: "Smart partner matching based on campaign needs" },
                        { icon: MessageCircle, title: "Real-time Chat", desc: "Seamless communication between parties" },
                        { icon: FileText, title: "Contract Management", desc: "Digital contract creation and signing" },
                        { icon: BarChart, title: "Analytics & Insights", desc: "Real-time performance tracking" }
                      ].map((item, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 p-6 transition-all duration-300 hover:from-accent/10 hover:to-primary/10">
                          <item.icon className="h-5 w-5 text-accent mb-3" />
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Audiovable */}
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-accent/5 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background/80 backdrop-blur-xl rounded-xl p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent mb-6 transform transition-transform duration-300 group-hover:scale-110">
                        <Headphones className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4">Audiovable</h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        Transform written content into engaging audiobooks with AI-optimized voices and enhanced learning features.
                      </p>
                      <ButtonGradient 
                        onClick={() => handleNavigation('/products/audiovable')}
                        className="mb-6"
                      >
                        Start Converting
                      </ButtonGradient>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { icon: Headphones, title: "Voice Customization", desc: "Premium male and female voices" },
                        { icon: Upload, title: "Easy Upload", desc: "Simple drag-and-drop interface" },
                        { icon: Share2, title: "Share & Download", desc: "Access content anywhere" },
                        { icon: Bot, title: "GPT Assistant", desc: "AI-powered platform help" }
                      ].map((item, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 transition-all duration-300 hover:from-primary/10 hover:to-accent/10">
                          <item.icon className="h-5 w-5 text-accent mb-3" />
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* KiddOAi */}
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 via-background to-primary/5 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background/80 backdrop-blur-xl rounded-xl p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary mb-6 transform transition-transform duration-300 group-hover:scale-110">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4">KiddOAi</h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        COPPA-compliant platform for safe, engaging, and educational children's content with advanced AI moderation.
                      </p>
                      <ButtonGradient 
                        onClick={() => handleNavigation('/products/kiddoai')}
                        className="mb-6"
                      >
                        Learn More
                      </ButtonGradient>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { icon: Video, title: "Smart Filtering", desc: "AI-powered content moderation" },
                        { icon: Clock, title: "Screen Time", desc: "Parental control features" },
                        { icon: Lock, title: "COPPA Compliant", desc: "Safe and secure platform" },
                        { icon: ChartLine, title: "Learning Progress", desc: "Track development goals" }
                      ].map((item, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 p-6 transition-all duration-300 hover:from-accent/10 hover:to-primary/10">
                          <item.icon className="h-5 w-5 text-accent mb-3" />
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 via-background to-primary/5 p-1">
                <div className="relative bg-background/80 backdrop-blur-xl rounded-xl p-8">
                  <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
                  <p className="text-muted-foreground mb-8">
                    Get started with our AI-powered solutions today
                  </p>
                  <ButtonGradient 
                    onClick={() => handleNavigation('/contact')}
                    className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    Contact Sales
                  </ButtonGradient>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
