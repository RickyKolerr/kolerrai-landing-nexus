
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Shield, Heart, Brain, Eye, Lock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const KiddOAi = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "COPPA Compliance",
      description: "Full compliance with children's online privacy protection regulations"
    },
    {
      icon: Brain,
      title: "Smart Content Filtering",
      description: "AI-powered content moderation for age-appropriate material"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous content and interaction monitoring"
    },
    {
      icon: Lock,
      title: "Parental Controls",
      description: "Customizable settings and usage reports for parents"
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
                KiddOAi
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                COPPA-compliant platform for safe, engaging, and educational children's content with advanced AI moderation.
              </p>
              <div className="flex gap-4 justify-center">
                <ButtonGradient onClick={() => navigate("/contact")}>
                  Get Started
                </ButtonGradient>
                <ButtonGradient variant="outline" onClick={() => navigate("/pricing")}>
                  View Plans
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
              <h2 className="text-2xl font-bold mb-6 text-center">Key Benefits</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
                  <p className="text-muted-foreground">Secure, monitored space for children to learn and explore</p>
                </div>
                <div className="text-center">
                  <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
                  <p className="text-muted-foreground">Age-appropriate learning content and activities</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Parent Involvement</h3>
                  <p className="text-muted-foreground">Tools for parents to guide and monitor progress</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KiddOAi;
