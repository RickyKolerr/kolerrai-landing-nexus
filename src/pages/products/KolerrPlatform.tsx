
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Users, BarChart, MessageCircle, Rocket, Bot, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const KolerrPlatform = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Smart Matchmaking",
      description: "AI-powered algorithm connects KOLs with the perfect brand partnerships"
    },
    {
      icon: BarChart,
      title: "Campaign Analytics",
      description: "Real-time performance tracking and ROI measurement"
    },
    {
      icon: MessageCircle,
      title: "Collaboration Tools",
      description: "Streamlined communication and content approval workflows"
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "24/7 support for campaign optimization and insights"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />
      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Kolerr Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                An AI-powered platform revolutionizing collaboration between KOLs and brands through smart matchmaking and comprehensive campaign management.
              </p>
              <div className="flex gap-4 justify-center">
                <ButtonGradient onClick={() => navigate("/contact")}>
                  Schedule Demo
                </ButtonGradient>
                <ButtonGradient variant="outline" onClick={() => navigate("/pricing")}>
                  View Pricing
                </ButtonGradient>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <feature.icon className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
              <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-4">01</div>
                  <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                  <p className="text-muted-foreground">Set up your brand or KOL profile with detailed metrics and preferences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-4">02</div>
                  <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
                  <p className="text-muted-foreground">Our AI analyzes profiles to suggest the most promising partnerships</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-4">03</div>
                  <h3 className="text-xl font-semibold mb-2">Launch Campaigns</h3>
                  <p className="text-muted-foreground">Manage and track your collaborative campaigns with ease</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KolerrPlatform;
