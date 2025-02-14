
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  BrainCircuit, Bot, Cpu, Database, Video, BookOpen, Shield, Gift, Award,
  MessageCircle, FileText, CreditCard, BarChart, Upload, Headphones,
  Share2, Users, Clock, Bell, Lock, ChartLine
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                AI-powered solutions designed for modern business challenges
              </p>
            </div>

            <div className="space-y-24">
              {/* Kolerr Platform */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">Kolerr Platform</h2>
                    <p className="text-muted-foreground mb-6">
                      An AI-powered platform revolutionizing collaboration between KOLs and brands through smart matchmaking and comprehensive campaign management.
                    </p>
                    <ButtonGradient 
                      className="mb-6"
                      onClick={() => handleNavigation('/product/kolerr-platform')}
                    >
                      Explore Platform
                    </ButtonGradient>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Bot className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>AI Matchmaking</CardTitle>
                        <CardDescription>Smart partner matching based on campaign needs</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <MessageCircle className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Real-time Chat</CardTitle>
                        <CardDescription>Seamless communication between parties</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <FileText className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Contract Management</CardTitle>
                        <CardDescription>Digital contract creation and signing</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
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
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">Audiovable</h2>
                    <p className="text-muted-foreground mb-6">
                      Transform written content into engaging audiobooks with AI-optimized voices and enhanced learning features.
                    </p>
                    <ButtonGradient 
                      className="mb-6"
                      onClick={() => handleNavigation('/product/audiovable')}
                    >
                      Start Converting
                    </ButtonGradient>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Headphones className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Voice Customization</CardTitle>
                        <CardDescription>Premium male and female voices</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Upload className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Easy Upload</CardTitle>
                        <CardDescription>Simple drag-and-drop interface</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Share2 className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Share & Download</CardTitle>
                        <CardDescription>Access content anywhere</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
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
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift card-shine">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">KiddOAi</h2>
                    <p className="text-muted-foreground mb-6">
                      COPPA-compliant platform for safe, engaging, and educational children's content with advanced AI moderation.
                    </p>
                    <ButtonGradient 
                      className="mb-6"
                      onClick={() => handleNavigation('/product/kiddoai')}
                    >
                      Learn More
                    </ButtonGradient>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Video className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Smart Filtering</CardTitle>
                        <CardDescription>AI-powered content moderation</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Clock className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>Screen Time</CardTitle>
                        <CardDescription>Parental control features</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
                      <CardHeader>
                        <Lock className="h-5 w-5 text-accent mb-2" />
                        <CardTitle>COPPA Compliant</CardTitle>
                        <CardDescription>Safe and secure platform</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-white/5 border-accent/10">
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
