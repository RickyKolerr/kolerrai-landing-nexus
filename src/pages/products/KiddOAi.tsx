
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  Shield, Video, Clock, Lock, ChartLine,
  Gift, Zap, Users, Bell, Brain
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const KiddOAi = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Video,
      title: "Smart Content Filtering",
      description: "Advanced AI-powered content moderation system for safe video watching.",
      details: [
        "Real-time content analysis",
        "Age-appropriate filtering",
        "Behavioral pattern detection",
        "Custom safety rules"
      ]
    },
    {
      icon: Users,
      title: "Child Features",
      description: "Engaging and educational features designed specifically for children.",
      details: [
        "Educational games",
        "Video creation tools",
        "Interactive learning",
        "Achievement system"
      ]
    },
    {
      icon: Clock,
      title: "Parent Controls",
      description: "Comprehensive tools for parents to manage and monitor their child's activity.",
      details: [
        "Screen time management",
        "Content approval",
        "Activity reports",
        "Safety alerts"
      ]
    },
    {
      icon: Brain,
      title: "AI Learning",
      description: "Personalized learning experiences powered by artificial intelligence.",
      details: [
        "Custom recommendations",
        "Learning path creation",
        "Progress tracking",
        "Skill development"
      ]
    },
    {
      icon: Gift,
      title: "Rewards Program",
      description: "Engaging reward system with physical prizes from partner brands.",
      details: [
        "Brand partnerships",
        "Achievement rewards",
        "Educational incentives",
        "Physical prizes"
      ]
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "COPPA-compliant platform with advanced security measures.",
      details: [
        "Data encryption",
        "Privacy protection",
        "Parental consent",
        "Safe authentication"
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
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">KiddOAi</h1>
                  <p className="text-muted-foreground">Safe & Engaging Content Platform for Children</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-xl text-muted-foreground">
                  A COPPA-compliant platform that provides a safe, educational, and engaging environment 
                  for children with advanced AI content moderation and personalized learning experiences.
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
                  Learn More
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KiddOAi;
