
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
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
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
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover-lift card-shine">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6 transition-transform duration-300 group-hover:scale-110">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">Kolerr Platform</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      An AI-powered platform revolutionizing collaboration between KOLs and brands through smart matchmaking and comprehensive campaign management.
                    </p>
                    <ButtonGradient 
                      onClick={() => handleNavigation('/products/kolerr-platform')}
                      className="mb-6 group-hover:shadow-lg transition-shadow duration-300"
                    >
                      Explore Platform
                    </ButtonGradient>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Bot className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>AI Matchmaking</CardTitle>
                        <CardDescription>Smart partner matching based on campaign needs</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <MessageCircle className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Real-time Chat</CardTitle>
                        <CardDescription>Seamless communication between parties</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <FileText className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Contract Management</CardTitle>
                        <CardDescription>Digital contract creation and signing</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <BarChart className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Analytics & Insights</CardTitle>
                        <CardDescription>Real-time performance tracking</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Audiovable */}
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover-lift card-shine">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Headphones className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">Audiovable</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Transform written content into engaging audiobooks with AI-optimized voices and enhanced learning features.
                    </p>
                    <ButtonGradient 
                      onClick={() => handleNavigation('/products/audiovable')}
                      className="mb-6 group-hover:shadow-lg transition-shadow duration-300"
                    >
                      Start Converting
                    </ButtonGradient>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Headphones className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Voice Customization</CardTitle>
                        <CardDescription>Premium male and female voices</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Upload className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Easy Upload</CardTitle>
                        <CardDescription>Simple drag-and-drop interface</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Share2 className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Share & Download</CardTitle>
                        <CardDescription>Access content anywhere</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Bot className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>GPT Assistant</CardTitle>
                        <CardDescription>AI-powered platform help</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>

              {/* KiddOAi */}
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover-lift card-shine">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">KiddOAi</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      COPPA-compliant platform for safe, engaging, and educational children's content with advanced AI moderation.
                    </p>
                    <ButtonGradient 
                      onClick={() => handleNavigation('/products/kiddoai')}
                      className="mb-6 group-hover:shadow-lg transition-shadow duration-300"
                    >
                      Learn More
                    </ButtonGradient>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Video className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Smart Filtering</CardTitle>
                        <CardDescription>AI-powered content moderation</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Clock className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Screen Time</CardTitle>
                        <CardDescription>Parental control features</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <Lock className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>COPPA Compliant</CardTitle>
                        <CardDescription>Safe and secure platform</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10 transition-all duration-300 hover:border-accent/30">
                      <CardHeader>
                        <ChartLine className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Learning Progress</CardTitle>
                        <CardDescription>Track development goals</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center">
              <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
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
        </section>
      </div>
    </div>
  );
};

export default Products;
