
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  BrainCircuit, Bot, MessageCircle, FileText, BarChart, 
  Users, Zap, CreditCard, Database, LineChart
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const KolerrPlatform = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Bot,
      title: "AI Matchmaking",
      description: "Our advanced AI algorithm analyzes campaign requirements and KOL profiles to suggest perfect matches based on audience demographics, past performance, and engagement rates.",
      details: [
        "Real-time partner suggestions",
        "Performance prediction",
        "Audience overlap analysis",
        "Brand affinity scoring"
      ]
    },
    {
      icon: Database,
      title: "Campaign Management",
      description: "Comprehensive tools for planning, executing, and tracking advertising campaigns from inception to completion.",
      details: [
        "Campaign calendar",
        "Budget tracking",
        "Content approval workflow",
        "Performance monitoring"
      ]
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Seamless communication between brands and KOLs with integrated file sharing and campaign context.",
      details: [
        "Direct messaging",
        "File sharing",
        "Campaign context threading",
        "Read receipts"
      ]
    },
    {
      icon: FileText,
      title: "Contract Management",
      description: "Digital contract creation and management system with secure electronic signatures and storage.",
      details: [
        "Template library",
        "E-signatures",
        "Version tracking",
        "Automated reminders"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure in-app payment system for seamless campaign transactions and instant settlements.",
      details: [
        "Multiple payment methods",
        "Automated invoicing",
        "Payment tracking",
        "Instant transfers"
      ]
    },
    {
      icon: LineChart,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard with real-time insights from major social platforms.",
      details: [
        "Cross-platform analytics",
        "Performance metrics",
        "ROI tracking",
        "Custom reports"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />
      
      <div className="pt-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <BrainCircuit className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Kolerr Platform</h1>
                  <p className="text-muted-foreground">AI-Powered Influencer Marketing Platform</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-xl text-muted-foreground">
                  Transform your influencer marketing campaigns with our AI-powered platform that connects brands 
                  with the perfect KOLs, streamlines campaign management, and provides real-time analytics for 
                  maximum ROI.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {features.map((feature) => (
                  <Card key={feature.title} className="bg-white/5 border-accent/10 hover-lift">
                    <CardHeader>
                      <feature.icon className="h-6 w-6 text-accent mb-4" />
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-accent" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <ButtonGradient size="lg" onClick={() => navigate('/contact')}>
                  Schedule a Demo
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KolerrPlatform;
