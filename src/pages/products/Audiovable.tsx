
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Headphones, Book, Mic, Settings, Volume2, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Audiovable = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: "Natural Voice AI",
      description: "Advanced text-to-speech with human-like voices in multiple languages"
    },
    {
      icon: Settings,
      title: "Custom Voice Settings",
      description: "Adjust tone, pace, and emotion for perfect narration"
    },
    {
      icon: Volume2,
      title: "Audio Enhancement",
      description: "Professional-grade sound processing and optimization"
    },
    {
      icon: BookOpen,
      title: "Learning Features",
      description: "Interactive elements and study aids integration"
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
                Audiovable
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform written content into engaging audiobooks with AI-optimized voices and enhanced learning features.
              </p>
              <div className="flex gap-4 justify-center">
                <ButtonGradient onClick={() => navigate("/contact")}>
                  Start Converting
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

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 text-center">
              <h2 className="text-2xl font-bold mb-8">Supported Content Types</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4">
                  <Book className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p>Textbooks</p>
                </div>
                <div className="p-4">
                  <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p>Novels</p>
                </div>
                <div className="p-4">
                  <Book className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p>Articles</p>
                </div>
                <div className="p-4">
                  <Book className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p>Documents</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Audiovable;
