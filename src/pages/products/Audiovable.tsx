
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  BookOpen, Bot, Headphones, Upload, Share2, 
  Mic, Zap, Download, Sparkles, Book
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Audiovable = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: "Smart Conversion",
      description: "Advanced AI technology that converts written content into natural-sounding audiobooks.",
      details: [
        "Natural language processing",
        "Automatic punctuation detection",
        "Content optimization",
        "Multiple format support"
      ]
    },
    {
      icon: Headphones,
      title: "Voice Customization",
      description: "Extensive library of premium male and female voices with customization options.",
      details: [
        "Multiple language support",
        "Voice speed control",
        "Tone adjustment",
        "Accent selection"
      ]
    },
    {
      icon: Share2,
      title: "Share & Download",
      description: "Flexible options for sharing and accessing your audiobooks across devices.",
      details: [
        "Cloud storage",
        "Offline access",
        "Link sharing",
        "Platform integration"
      ]
    },
    {
      icon: Sparkles,
      title: "Premium Voices",
      description: "High-quality, professionally recorded voices for superior audio experience.",
      details: [
        "Studio quality audio",
        "Emotional expression",
        "Natural inflection",
        "Character voices"
      ]
    },
    {
      icon: Book,
      title: "Study Materials",
      description: "Convert educational content into engaging audio learning resources.",
      details: [
        "Chapter markers",
        "Study notes integration",
        "Progress tracking",
        "Learning optimization"
      ]
    },
    {
      icon: Bot,
      title: "GPT Assistant",
      description: "AI-powered platform assistance for seamless content conversion and management.",
      details: [
        "24/7 support",
        "Smart recommendations",
        "Process automation",
        "Content optimization"
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
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Audiovable</h1>
                  <p className="text-muted-foreground">AI-Powered Text to Audio Conversion</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-xl text-muted-foreground">
                  Transform any written content into engaging, professionally narrated audiobooks with our 
                  AI-powered platform. Perfect for educational content, books, articles, and more.
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
                  Start Converting
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Audiovable;
